using System.ComponentModel.DataAnnotations;
using bikeAPI.Models.Attributes; // For the custom attribute
namespace bikeAPI.Models.Dtos;

public class BikeCreateDto
{
    [Required]
    public string Name { get; set; } = string.Empty;

    // We keep these for creation, but we will hide them in the "Summary" view later
    public string Description { get; set; } = string.Empty;
    public string ImageUrl { get; set; } = string.Empty;

    [Required]
    [AllowedBrands("Honda", "Yamaha", "BMW", "Ducati", "Kawasaki")] // Custom Attribute
    public string Brand { get; set; } = string.Empty;

    public string Model { get; set; } = string.Empty;

    [Range(1000, 100000, ErrorMessage = "Price must be between 1,000 and 100,000")]
    public decimal Price { get; set; }
}