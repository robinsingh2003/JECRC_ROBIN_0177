using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using FoodieExpress.Data;
using FoodieExpress.Models;

namespace FoodieExpress.Controllers;

[Authorize(Roles = "Admin")]
public class AdminController : Controller
{
    private readonly ApplicationDbContext _context;
    private readonly IWebHostEnvironment _environment;

    public AdminController(ApplicationDbContext context, IWebHostEnvironment environment)
    {
        _context = context;
        _environment = environment;
    }

    public async Task<IActionResult> Dashboard()
    {
        ViewBag.FoodCount = await _context.FoodItems.CountAsync();
        ViewBag.OrderCount = await _context.Orders.CountAsync();
        ViewBag.Revenue = await _context.Orders.Where(order => order.Status != OrderStatus.Cancelled).SumAsync(order => order.Total);
        ViewBag.PendingCount = await _context.Orders.CountAsync(order => order.Status != OrderStatus.Delivered && order.Status != OrderStatus.Cancelled);
        return View(await _context.Orders.Include(order => order.Items).OrderByDescending(order => order.OrderedAt).Take(8).ToListAsync());
    }

    public async Task<IActionResult> FoodItems()
    {
        return View(await _context.FoodItems.Include(food => food.Category).OrderBy(food => food.Name).ToListAsync());
    }

    public async Task<IActionResult> CreateFoodItem()
    {
        await PopulateCategoriesAsync();
        return View(new FoodItem());
    }

    [HttpPost]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> CreateFoodItem(FoodItem foodItem, IFormFile? image)
    {
        if (!ModelState.IsValid)
        {
            await PopulateCategoriesAsync();
            return View(foodItem);
        }

        foodItem.ImageUrl = await SaveImageAsync(image) ?? foodItem.ImageUrl;
        _context.FoodItems.Add(foodItem);
        await _context.SaveChangesAsync();
        return RedirectToAction(nameof(FoodItems));
    }

    public async Task<IActionResult> EditFoodItem(int id)
    {
        var food = await _context.FoodItems.FindAsync(id);
        if (food is null)
        {
            return NotFound();
        }

        await PopulateCategoriesAsync();
        return View(food);
    }

    [HttpPost]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> EditFoodItem(int id, FoodItem foodItem, IFormFile? image)
    {
        if (id != foodItem.Id)
        {
            return BadRequest();
        }

        if (!ModelState.IsValid)
        {
            await PopulateCategoriesAsync();
            return View(foodItem);
        }

        foodItem.ImageUrl = await SaveImageAsync(image) ?? foodItem.ImageUrl;
        _context.Update(foodItem);
        await _context.SaveChangesAsync();
        return RedirectToAction(nameof(FoodItems));
    }

    [HttpPost]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> DeleteFoodItem(int id)
    {
        var food = await _context.FoodItems.FindAsync(id);
        if (food is not null)
        {
            _context.FoodItems.Remove(food);
            await _context.SaveChangesAsync();
        }

        return RedirectToAction(nameof(FoodItems));
    }

    public async Task<IActionResult> Categories()
    {
        return View(await _context.Categories.Include(category => category.FoodItems).OrderBy(category => category.Name).ToListAsync());
    }

    [HttpPost]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> AddCategory(Category category)
    {
        if (ModelState.IsValid)
        {
            _context.Categories.Add(category);
            await _context.SaveChangesAsync();
        }

        return RedirectToAction(nameof(Categories));
    }

    [HttpPost]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> DeleteCategory(int id)
    {
        var category = await _context.Categories.Include(row => row.FoodItems).FirstOrDefaultAsync(row => row.Id == id);
        if (category is not null && !category.FoodItems.Any())
        {
            _context.Categories.Remove(category);
            await _context.SaveChangesAsync();
        }

        return RedirectToAction(nameof(Categories));
    }

    public async Task<IActionResult> Orders()
    {
        return View(await _context.Orders.Include(order => order.Items).OrderByDescending(order => order.OrderedAt).ToListAsync());
    }

    [HttpPost]
    [ValidateAntiForgeryToken]
    public async Task<IActionResult> UpdateOrderStatus(int id, OrderStatus status)
    {
        var order = await _context.Orders.FindAsync(id);
        if (order is not null)
        {
            order.Status = status;
            await _context.SaveChangesAsync();
        }

        return RedirectToAction(nameof(Orders));
    }

    private async Task PopulateCategoriesAsync()
    {
        ViewBag.Categories = new SelectList(await _context.Categories.OrderBy(row => row.Name).ToListAsync(), "Id", "Name");
    }

    private async Task<string?> SaveImageAsync(IFormFile? image)
    {
        if (image is null || image.Length == 0)
        {
            return null;
        }

        var uploadsRoot = Path.Combine(_environment.WebRootPath, "uploads");
        Directory.CreateDirectory(uploadsRoot);
        var extension = Path.GetExtension(image.FileName);
        var fileName = $"{Guid.NewGuid():N}{extension}";
        var path = Path.Combine(uploadsRoot, fileName);
        await using var stream = System.IO.File.Create(path);
        await image.CopyToAsync(stream);
        return $"/uploads/{fileName}";
    }
}
