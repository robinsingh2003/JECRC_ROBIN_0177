using ProductManagement.DTOs;
namespace ProductManagement.Repositories.Interfaces;

public interface IProductRepository 
{
    Task<IEnumerable<ProductResponseDto>> GetAllAsync();
    Task<ProductResponseDto?> GetByIdAsync(int id);
}