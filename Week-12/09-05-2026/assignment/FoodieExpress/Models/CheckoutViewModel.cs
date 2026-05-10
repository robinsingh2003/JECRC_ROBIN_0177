using System.ComponentModel.DataAnnotations;

namespace FoodieExpress.Models;

public class CheckoutViewModel
{
    [Required, StringLength(120)]
    public string CustomerName { get; set; } = string.Empty;

    [Required, Phone, StringLength(20)]
    public string PhoneNumber { get; set; } = string.Empty;

    [Required, StringLength(300)]
    public string DeliveryAddress { get; set; } = string.Empty;
}
