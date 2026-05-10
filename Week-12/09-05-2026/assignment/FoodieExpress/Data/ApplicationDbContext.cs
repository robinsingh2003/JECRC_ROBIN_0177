using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using FoodieExpress.Models;

namespace FoodieExpress.Data;

public class ApplicationDbContext : IdentityDbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
    {
    }

    public DbSet<Category> Categories => Set<Category>();

    public DbSet<FoodItem> FoodItems => Set<FoodItem>();

    public DbSet<CartItem> CartItems => Set<CartItem>();

    public DbSet<Order> Orders => Set<Order>();

    public DbSet<OrderItem> OrderItems => Set<OrderItem>();

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);

        builder.Entity<CartItem>()
            .HasIndex(item => new { item.UserId, item.FoodItemId })
            .IsUnique();

        builder.Entity<Order>()
            .Property(order => order.Status)
            .HasConversion<string>();

        builder.Entity<Category>().HasData(
            new Category { Id = 1, Name = "Biryani", Description = "Layered rice meals packed with spice and aroma." },
            new Category { Id = 2, Name = "Pizza", Description = "Cheesy oven-baked favourites." },
            new Category { Id = 3, Name = "South Indian", Description = "Crisp dosas, idlis, and quick comfort plates." },
            new Category { Id = 4, Name = "Desserts", Description = "Sweet finishes and celebration bites." }
        );

        builder.Entity<FoodItem>().HasData(
            new FoodItem { Id = 1, Name = "Hyderabadi Chicken Biryani", Description = "Dum-cooked basmati rice with tender chicken, mint, and saffron.", Price = 279, CategoryId = 1, PreparationMinutes = 32, Rating = 4.7m, ImageUrl = "https://images.unsplash.com/photo-1701579231305-d84d8af9a3fd?auto=format&fit=crop&w=900&q=80" },
            new FoodItem { Id = 2, Name = "Paneer Tikka Biryani", Description = "Smoky paneer cubes layered with long-grain rice and rich masala.", Price = 239, CategoryId = 1, PreparationMinutes = 28, Rating = 4.5m, ImageUrl = "https://images.unsplash.com/photo-1630409351241-e90e7f5e434d?auto=format&fit=crop&w=900&q=80" },
            new FoodItem { Id = 3, Name = "Farmhouse Cheese Pizza", Description = "Loaded vegetables, mozzarella, oregano, and a crisp hand-tossed base.", Price = 329, CategoryId = 2, PreparationMinutes = 24, Rating = 4.4m, ImageUrl = "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=900&q=80" },
            new FoodItem { Id = 4, Name = "Peri Peri Chicken Pizza", Description = "Spicy chicken, bell peppers, jalapenos, and creamy cheese.", Price = 379, CategoryId = 2, PreparationMinutes = 26, Rating = 4.6m, ImageUrl = "https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&w=900&q=80" },
            new FoodItem { Id = 5, Name = "Masala Dosa Combo", Description = "Crispy dosa with potato masala, sambar, and coconut chutney.", Price = 149, CategoryId = 3, PreparationMinutes = 18, Rating = 4.8m, ImageUrl = "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=900&q=80" },
            new FoodItem { Id = 6, Name = "Idli Vada Breakfast", Description = "Soft idlis and crunchy vada served with hot sambar.", Price = 119, CategoryId = 3, PreparationMinutes = 15, Rating = 4.3m, ImageUrl = "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=900&q=80" },
            new FoodItem { Id = 7, Name = "Chocolate Lava Cake", Description = "Warm chocolate cake with a molten centre.", Price = 129, CategoryId = 4, PreparationMinutes = 12, Rating = 4.6m, ImageUrl = "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=80" },
            new FoodItem { Id = 8, Name = "Gulab Jamun Box", Description = "Soft khoya dumplings soaked in cardamom syrup.", Price = 99, CategoryId = 4, PreparationMinutes = 8, Rating = 4.5m, ImageUrl = "https://images.unsplash.com/photo-1605197183305-f1d672bfe6b1?auto=format&fit=crop&w=900&q=80" }
        );
    }
}
