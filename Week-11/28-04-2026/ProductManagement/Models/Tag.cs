namespace ProductManagement.Models;

public class Tag
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;

    // Navigation for the Many-to-Many relationship
    public ICollection<ProductTag> ProductTags { get; set; } = new List<ProductTag>();
}