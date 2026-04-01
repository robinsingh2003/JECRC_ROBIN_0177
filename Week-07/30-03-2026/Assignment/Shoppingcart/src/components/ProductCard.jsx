// React Concept: Functional Component
// ProductCard is a presentational component that displays product information.
// Parent-Child Relationship: ProductCard is a child of ProductList.
// Props: Receives product (object) and addToCart (function) from parent.
// This component is stateless - it doesn't manage any state itself.
function ProductCard({ product, addToCart }) {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p className="price">₹{product.price}</p>
      {/* React Concept: Event Handling
       * onClick is a synthetic event handler provided by React.
       * When clicked, it calls addToCart with the product object.
       * This demonstrates event bubbling and callback props.
       */}
      <button className="add-btn" onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;