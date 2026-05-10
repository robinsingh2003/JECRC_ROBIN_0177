using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using FoodieExpress.Data;
using FoodieExpress.Models;

namespace FoodieExpress.Controllers;

public class HomeController : Controller
{
    private readonly ApplicationDbContext _context;

    public HomeController(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<IActionResult> Index(string? search, int? categoryId)
    {
        var foods = _context.FoodItems
            .Include(food => food.Category)
            .Where(food => food.IsAvailable);

        if (!string.IsNullOrWhiteSpace(search))
        {
            foods = foods.Where(food => food.Name.Contains(search) || food.Description.Contains(search));
        }

        if (categoryId.HasValue)
        {
            foods = foods.Where(food => food.CategoryId == categoryId.Value);
        }

        var foodItems = await foods.ToListAsync();

        var viewModel = new MenuViewModel
        {
            Categories = await _context.Categories.OrderBy(category => category.Name).ToListAsync(),
            FoodItems = foodItems.OrderByDescending(food => food.Rating).ToList(),
            Search = search,
            CategoryId = categoryId
        };

        return View(viewModel);
    }

    public async Task<IActionResult> Details(int id)
    {
        var food = await _context.FoodItems
            .Include(item => item.Category)
            .FirstOrDefaultAsync(item => item.Id == id && item.IsAvailable);

        return food is null ? NotFound() : View(food);
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
