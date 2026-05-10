using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using FoodieExpress.Data;
using FoodieExpress.Models;

namespace FoodieExpress.Controllers;

[Authorize]
public class CartController : Controller
{
    private readonly ApplicationDbContext _context;
    private readonly UserManager<IdentityUser> _userManager;

    public CartController(ApplicationDbContext context, UserManager<IdentityUser> userManager)
    {
        _context = context;
        _userManager = userManager;
    }

    public async Task<IActionResult> Index()
    {
        return View(await GetCartAsync());
    }

    [HttpPost]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> Add(int foodItemId, int quantity = 1)
    {
        var userId = _userManager.GetUserId(User)!;
        var foodExists = await _context.FoodItems.AnyAsync(food => food.Id == foodItemId && food.IsAvailable);
        if (!foodExists)
        {
            return NotFound();
        }

        var existing = await _context.CartItems.FirstOrDefaultAsync(item => item.UserId == userId && item.FoodItemId == foodItemId);
        if (existing is null)
        {
            _context.CartItems.Add(new CartItem { UserId = userId, FoodItemId = foodItemId, Quantity = Math.Max(1, quantity) });
        }
        else
        {
            existing.Quantity += Math.Max(1, quantity);
        }

        await _context.SaveChangesAsync();
        TempData["Toast"] = "Item added to cart.";
        return RedirectToAction("Index", "Home");
    }

    [HttpPost]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> Remove(int id)
    {
        var userId = _userManager.GetUserId(User)!;
        var item = await _context.CartItems.FirstOrDefaultAsync(row => row.Id == id && row.UserId == userId);
        if (item is not null)
        {
            _context.CartItems.Remove(item);
            await _context.SaveChangesAsync();
        }

        return RedirectToAction(nameof(Index));
    }

    public async Task<IActionResult> Checkout()
    {
        var cart = await GetCartAsync();
        if (!cart.Any())
        {
            return RedirectToAction(nameof(Index));
        }

        ViewBag.Cart = cart;
        return View(new CheckoutViewModel());
    }

    [HttpPost]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> Checkout(CheckoutViewModel model)
    {
        var cart = await GetCartAsync();
        if (!cart.Any())
        {
            return RedirectToAction(nameof(Index));
        }

        if (!ModelState.IsValid)
        {
            ViewBag.Cart = cart;
            return View(model);
        }

        var subtotal = cart.Sum(item => item.LineTotal);
        var tax = Math.Round(subtotal * 0.05m, 2);
        var order = new Order
        {
            UserId = _userManager.GetUserId(User)!,
            CustomerName = model.CustomerName,
            PhoneNumber = model.PhoneNumber,
            DeliveryAddress = model.DeliveryAddress,
            Subtotal = subtotal,
            Tax = tax,
            DeliveryFee = subtotal >= 499 ? 0 : 39,
            Total = subtotal + tax + (subtotal >= 499 ? 0 : 39),
            Items = cart.Select(item => new OrderItem
            {
                FoodItemId = item.FoodItemId,
                FoodName = item.FoodItem!.Name,
                UnitPrice = item.FoodItem.Price,
                Quantity = item.Quantity,
                LineTotal = item.LineTotal
            }).ToList()
        };

        _context.Orders.Add(order);
        _context.CartItems.RemoveRange(cart);
        await _context.SaveChangesAsync();

        return RedirectToAction("Invoice", "Orders", new { id = order.Id });
    }

    private Task<List<CartItem>> GetCartAsync()
    {
        var userId = _userManager.GetUserId(User)!;
        return _context.CartItems
            .Include(item => item.FoodItem)
            .ThenInclude(food => food!.Category)
            .Where(item => item.UserId == userId)
            .OrderBy(item => item.FoodItem!.Name)
            .ToListAsync();
    }
}
