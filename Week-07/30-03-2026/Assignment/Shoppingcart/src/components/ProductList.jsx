
import ProductCard from "./ProductCard";

// React Concept: Functional Component with Props
// ProductList is a functional component that receives props from its parent (App).
// Parent-Child Relationship: ProductList is a child of App, parent of ProductCard.
// Props: products (array) and addToCart (function) are passed down from App.
// This demonstrates prop drilling - passing data through component hierarchy.
function ProductList({ products, addToCart }) {
  return (
    <div className="products-section">
      <h2>Products</h2>
      <div className="product-grid">
        {/* React Concept: Rendering Lists with map()
         * We use map() to render a list of ProductCard components.
         * Each item in the products array becomes a ProductCard.
         * Parent-Child: ProductList renders multiple ProductCard children.
         */}
        {products.map((product) => (
          <ProductCard
            // React Concept: Key Prop
            // The key prop helps React identify which items have changed, added, or removed.
            // It should be unique and stable. Using product.id ensures uniqueness.
            key={product.id}
            // Props Flow: Passing product data and addToCart function to child
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;