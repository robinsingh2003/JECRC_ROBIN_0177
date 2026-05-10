using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FoodieExpress.Models;

public enum OrderStatus
{
    Placed,
    Accepted,
    Preparing,
    OutForDelivery,
    Delivered,
    Cancelled
}

public class Order
{
    public int Id { get; set; }

    public string UserId { get; set; } = string.Empty;

    [Required, StringLength(120)]
    public string CustomerName { get; set; } = string.Empty;

    [Required, Phone, StringLength(20)]
    public string PhoneNumber { get; set; } = string.Empty;

    [Required, StringLength(300)]
    public string DeliveryAddress { get; set; } = string.Empty;

    public DateTime OrderedAt { get; set; } = DateTime.UtcNow;

    public OrderStatus Status { get; set; } = OrderStatus.Placed;

    [Column(TypeName = "decimal(10,2)")]
    public decimal Subtotal { get; set; }

    [Column(TypeName = "decimal(10,2)")]
    public decimal DeliveryFee { get; set; } = 39;

    [Column(TypeName = "decimal(10,2)")]
    public decimal Tax { get; set; }

    [Column(TypeName = "decimal(10,2)")]
    public decimal Total { get; set; }

    public ICollection<OrderItem> Items { get; set; } = new List<OrderItem>();
}
