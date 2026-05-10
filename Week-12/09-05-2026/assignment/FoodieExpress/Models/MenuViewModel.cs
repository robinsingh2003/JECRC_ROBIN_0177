namespace FoodieExpress.Models;

public class MenuViewModel
{
    public IReadOnlyList<Category> Categories { get; set; } = Array.Empty<Category>();

    public IReadOnlyList<FoodItem> FoodItems { get; set; } = Array.Empty<FoodItem>();

    public string? Search { get; set; }

    public int? CategoryId { get; set; }
}
