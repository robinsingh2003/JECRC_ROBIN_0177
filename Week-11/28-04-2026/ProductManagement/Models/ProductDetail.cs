namespace ProductManagement.Models;

public class ProductDetail
{
    public int Id { get; set; }
    public string Description { get; set; } = string.Empty;

    // Foreign Key back to Product
    public int ProductId { get; set; }
    public Product? Product { get; set; }
}