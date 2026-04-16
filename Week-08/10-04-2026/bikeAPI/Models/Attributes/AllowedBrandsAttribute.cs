using System.ComponentModel.DataAnnotations;

namespace bikeAPI.Models.Attributes;

public class AllowedBrandsAttribute : ValidationAttribute
{
    private readonly string[] _allowedBrands;

    public AllowedBrandsAttribute(params string[] allowedBrands)
    {
        _allowedBrands = allowedBrands;
    }

    protected override ValidationResult? IsValid(object? value, ValidationContext context)
    {
        if (value is string brand && !_allowedBrands.Contains(brand))
        {
            return new ValidationResult($"Only these brands are allowed: {string.Join(", ", _allowedBrands)}");
        }
        return ValidationResult.Success;
    }
}