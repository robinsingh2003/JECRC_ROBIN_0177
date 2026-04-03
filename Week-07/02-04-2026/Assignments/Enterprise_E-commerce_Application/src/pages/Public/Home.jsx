import React from "react";
import { Link } from "react-router-dom";
import { useProduct } from "../../context/ProductContext";

function Home() {
  const { productData } = useProduct();
  const featuredProducts = Object.values(productData).slice(0, 6); // Show first 6 products

  console.log('Home - productData:', productData);
  console.log('Home - featuredProducts:', featuredProducts);

  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to Enterprise E-Commerce</h1>
        <p>Discover amazing products at unbeatable prices</p>
        <Link to="/products" className="btn-primary">Shop Now</Link>
      </section>

      <section className="featured-products">
        <div className="product-list-header">
          <h2>Featured Products</h2>
          <p>Check out our most popular items</p>
        </div>

        <div className="products-grid">
          {featuredProducts.map(product => (
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

        <div className="view-all-container">
          <Link to="/products" className="btn-secondary">View All Products</Link>
        </div>
      </section>

      <section className="features">
        <div className="feature">
          <h3>Quality Products</h3>
          <p>We offer only the best quality products from trusted brands.</p>
        </div>
        <div className="feature">
          <h3>Fast Shipping</h3>
          <p>Get your orders delivered quickly and safely.</p>
        </div>
        <div className="feature">
          <h3>Secure Payments</h3>
          <p>Your transactions are protected with advanced security.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;