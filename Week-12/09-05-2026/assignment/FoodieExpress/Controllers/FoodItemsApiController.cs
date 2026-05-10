using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using FoodieExpress.Data;

namespace FoodieExpress.Controllers;

[ApiController]
[Route("api/fooditems")]
public class FoodItemsApiController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public FoodItemsApiController(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<IActionResult> Get(string? search)
    {
        var query = _context.FoodItems.Include(food => food.Category).Where(food => food.IsAvailable);
        if (!string.IsNullOrWhiteSpace(search))
        {
            query = query.Where(food => food.Name.Contains(search) || food.Description.Contains(search));
        }

        var foods = await query.Select(food => new
        {
            food.Id,
            food.Name,
            food.Description,
            food.Price,
            food.ImageUrl,
            food.Rating,
            food.PreparationMinutes,
            Category = food.Category!.Name
        }).ToListAsync();

        return Ok(foods);
    }
}
