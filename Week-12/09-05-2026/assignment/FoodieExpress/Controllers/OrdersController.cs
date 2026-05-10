using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using FoodieExpress.Data;

namespace FoodieExpress.Controllers;

[Authorize]
public class OrdersController : Controller
{
    private readonly ApplicationDbContext _context;
    private readonly UserManager<IdentityUser> _userManager;

    public OrdersController(ApplicationDbContext context, UserManager<IdentityUser> userManager)
    {
        _context = context;
        _userManager = userManager;
    }

    public async Task<IActionResult> History()
    {
        var userId = _userManager.GetUserId(User)!;
        var orders = await _context.Orders
            .Include(order => order.Items)
            .Where(order => order.UserId == userId)
            .OrderByDescending(order => order.OrderedAt)
            .ToListAsync();

        return View(orders);
    }

    public async Task<IActionResult> Invoice(int id)
    {
        var userId = _userManager.GetUserId(User)!;
        var order = await _context.Orders
            .Include(row => row.Items)
            .FirstOrDefaultAsync(row => row.Id == id && (row.UserId == userId || User.IsInRole("Admin")));

        return order is null ? NotFound() : View(order);
    }
}
