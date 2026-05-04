namespace ProductManagement.Models;

public class Category
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    
    // Optional: Navigation property to see all products in this category
    public ICollection<Product> Products { get; set; } = new List<Product>();
}