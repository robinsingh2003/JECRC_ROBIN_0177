// using Microsoft.AspNetCore.Mvc;
// using ProductAPI.Data;
// using ProductAPI.Models;

// namespace ProductAPI.Controllers
// {
//     [Route("api/[controller]")]
//     [ApiController]
//     public class ProductController : ControllerBase
//     {
//         private readonly ApplicationDBContext _context;

//         public ProductController(ApplicationDBContext context)
//         {
//             _context = context;
//         }

//         // GET: api/Product
//         [HttpGet]
//         public IActionResult GetAllProducts()
//         {
//             var products = _context.Products.ToList();
//             return Ok(products);
//         }

//         // GET: api/Product/5
//         [HttpGet("{id}")]
//         public IActionResult GetProduct(int id)
//         {
//             var product = _context.Products.Find(id);
//             if (product == null)
//             {
//                 return NotFound();
//             }
//             return Ok(product);
//         }

//         // POST: api/Product
//         [HttpPost]
//         public IActionResult AddProduct([FromBody] Product product)
//         {
//             _context.Products.Add(product);
//             _context.SaveChanges();
//             return CreatedAtAction(nameof(GetProduct), new { id = product.Id }, product);
//         }

//         // PUT: api/Product/5
//         [HttpPut("{id}")]
//         public IActionResult UpdateProduct(int id, [FromBody] Product product)
//         {
//             // Validate input
//             if (string.IsNullOrWhiteSpace(product.Name))
//             {
//                 return BadRequest("Product name is required");
//             }
//             if (product.Price < 0)
//             {
//                 return BadRequest("Price cannot be negative");
//             }
//             if (product.Quantity < 0)
//             {
//                 return BadRequest("Quantity cannot be negative");
//             }

//             var existingProduct = _context.Products.Find(id);
//             if (existingProduct == null)
//             {
//                 return NotFound();
//             }

//             existingProduct.Name = product.Name;
//             existingProduct.Price = product.Price;
//             existingProduct.Quantity = product.Quantity;

//             _context.Products.Update(existingProduct);
//             _context.SaveChanges();

//             return Ok(existingProduct);
//         }

//         // DELETE: api/Product/5
//         [HttpDelete("{id}")]
//         public IActionResult DeleteProduct(int id)
//         {
//             var product = _context.Products.Find(id);
//             if (product == null)
//             {
//                 return NotFound();
//             }

//             _context.Products.Remove(product);
//             _context.SaveChanges();

//             return NoContent();
//         }
//     }
// }
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProductAPI.Data;
using ProductAPI.Models;

namespace ProductAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ProductController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET ALL PRODUCTS
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Product>>> GetProducts()
        {
            return await _context.Products.ToListAsync();
        }

        // GET PRODUCT BY ID
        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetProduct(int id)
        {
            var product = await _context.Products.FindAsync(id);

            if (product == null)
                return NotFound();

            return product;
        }

        // SEARCH PRODUCT BY NAME
        [HttpGet("search/{name}")]
        public async Task<ActionResult<IEnumerable<Product>>> SearchProduct(string name)
        {
            var products = await _context.Products
                .Where(p => p.Name.Contains(name))
                .ToListAsync();

            if (products.Count == 0)
                return NotFound();

            return Ok(products);
        }

        // ADD PRODUCT
        [HttpPost]
        public async Task<ActionResult<Product>> CreateProduct(Product product)
        {
            _context.Products.Add(product);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetProduct), new { id = product.Id }, product);
        }

        // UPDATE PRODUCT
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateProduct(int id, Product updatedProduct)
        {
            if (id != updatedProduct.Id)
                return BadRequest();

            var product = await _context.Products.FindAsync(id);

            if (product == null)
                return NotFound();

            product.Name = updatedProduct.Name;
            product.Price = updatedProduct.Price;
            product.Quantity = updatedProduct.Quantity;

            await _context.SaveChangesAsync();

            return NoContent();
        }

        // DELETE PRODUCT
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProduct(int id)
        {
            var product = await _context.Products.FindAsync(id);

            if (product == null)
                return NotFound();

            _context.Products.Remove(product);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}