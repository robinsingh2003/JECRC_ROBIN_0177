namespace bikeAPI.Models.Dtos;

public class BikeSummaryDto
{
    // We hide ID, Description, ImageUrl, Color, and Type here
    public string Name { get; set; } = string.Empty;
    public string Brand { get; set; } = string.Empty;
    public string Model { get; set; } = string.Empty;
    public decimal Price { get; set; }
}