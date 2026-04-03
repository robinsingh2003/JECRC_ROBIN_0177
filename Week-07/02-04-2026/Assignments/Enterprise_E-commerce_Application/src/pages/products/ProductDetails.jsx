import { useParams, Link, Outlet } from "react-router-dom";
import { useProduct } from "../../context/ProductContext";

export default function ProductDetails() {
  const { productId } = useParams();
  const { productData } = useProduct();
  const product = productData[productId];

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product Not Found</h2>
        <p>The product you're looking for doesn't exist.</p>
        <Link to="/products" className="btn-primary">Back to Products</Link>
      </div>
    );
  }

  return (
    <div className="product-details">
      <div className="product-header">
        <div className="product-gallery">
          <img src={product.image} alt={product.name} className="main-image" />
        </div>
        <div className="product-info">
          <span className="product-category">{product.category}</span>
          <h1 className="product-title">{product.name}</h1>
          <p className="product-price">${product.price.toLocaleString()}</p>
          <p className="product-description">{product.description}</p>

          <div className="product-actions">
            <button className="btn-primary add-to-cart">
              <span className="btn-icon">🛒</span>
              Add to Cart
            </button>
            <button className="btn-secondary">
              <span className="btn-icon">❤️</span>
              Add to Wishlist
            </button>
          </div>

          <div className="product-meta">
            <div className="meta-item">
              <span className="meta-icon">🚚</span>
              <span>Free shipping</span>
            </div>
            <div className="meta-item">
              <span className="meta-icon">↩️</span>
              <span>30-day returns</span>
            </div>
            <div className="meta-item">
              <span className="meta-icon">🛡️</span>
              <span>2-year warranty</span>
            </div>
          </div>
        </div>
      </div>

      <nav className="product-nav">
        <Link to={`/products/${productId}/reviews`}>Reviews ({product.reviews.length})</Link>
        <Link to={`/products/${productId}/specs`}>Specifications</Link>
      </nav>

      <Outlet context={{ product }} />
    </div>
  );
}