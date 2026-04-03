import { Link } from "react-router-dom";
import { useProduct } from "../../context/ProductContext";

export default function ProductList() {
  const { productData } = useProduct();
  const products = Object.values(productData);

  console.log('ProductList - productData:', productData);
  console.log('ProductList - products array:', products);
  console.log('ProductList - products length:', products.length);

  return (
    <div className="product-list">
      <div className="product-list-header">
        <h2>Our Products</h2>
        <p>Discover our premium collection of tech gadgets</p>
      </div>

      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image-container">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Available';
                }}
                loading="lazy"
              />
              <div className="product-overlay">
                <Link to={`/products/${product.id}`} className="view-details-btn">
                  View Details
                </Link>
              </div>
            </div>
            <div className="product-info">
              <span className="product-category">{product.category}</span>
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">₹{product.price.toLocaleString()}</p>
              <div className="product-rating">
                <span className="stars">★★★★★</span>
                <span className="rating-text">(4.5)</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}