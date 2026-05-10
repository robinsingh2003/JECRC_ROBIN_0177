using System.ComponentModel.DataAnnotations;

namespace FoodieExpress.Models;

public class Category
{
    public int Id { get; set; }

    [Required, StringLength(80)]
    public string Name { get; set; } = string.Empty;

    [StringLength(160)]
    public string Description { get; set; } = string.Empty;

    public ICollection<FoodItem> FoodItems { get; set; } = new List<FoodItem>();
}
