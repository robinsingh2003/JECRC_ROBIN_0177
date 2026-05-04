using ProductManagement.DTOs;
public interface IProductRepository {
    Task<IEnumerable<ProductResponseDto>> GetAllAsync();
    Task<ProductResponseDto?> GetByIdAsync(int id);
}