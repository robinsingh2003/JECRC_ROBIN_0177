using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FoodieExpress.Models;

public class FoodItem
{
    public int Id { get; set; }

    [Required, StringLength(120)]
    public string Name { get; set; } = string.Empty;

    [Required, StringLength(400)]
    public string Description { get; set; } = string.Empty;

    [Column(TypeName = "decimal(10,2)")]
    [Range(1, 10000)]
    public decimal Price { get; set; }

    [StringLength(500)]
    public string ImageUrl { get; set; } = string.Empty;

    [Range(1, 120)]
    public int PreparationMinutes { get; set; } = 25;

    [Column(TypeName = "decimal(3,2)")]
    [Range(0, 5)]
    public decimal Rating { get; set; } = 4.4m;

    public bool IsAvailable { get; set; } = true;

    public int CategoryId { get; set; }

    public Category? Category { get; set; }
}
