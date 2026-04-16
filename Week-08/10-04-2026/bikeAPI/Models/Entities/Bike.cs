namespace bikeAPI.Models.Entities;

public class Bike
{
    public Guid Id { get; set; }
    public required string Name { get; set; }
    public required string Description { get; set; }
    public required string ImageUrl { get; set; }
    public required string Color { get; set; }
    public required string Type { get; set; }
    public required string Brand { get; set; }
    public required string Model { get; set; }
    public decimal Price { get; set; }
}