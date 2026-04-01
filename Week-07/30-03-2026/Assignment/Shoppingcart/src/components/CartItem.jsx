// React Concept: Functional Component - Leaf Component
// CartItem is a leaf component that displays individual cart items.
// Parent-Child Relationship: CartItem is a child of Cart, has no children.
// Props: Receives item object and handler functions from parent.
// This component handles user interactions for cart item management.
function CartItem({ item, increaseQuantity, decreaseQuantity, removeItem }) {
  return (
    <div className="cart-item">
      <div>
        <h4>{item.name}</h4>
        {/* React Concept: Dynamic Content Rendering
         * The price calculation is done inline in JSX.
         * React automatically updates this when item.quantity changes.
         */}
        <p>
          ₹{item.price} × {item.quantity} = ₹{item.price * item.quantity}
        </p>
      </div>

      <div className="cart-actions">
        {/* React Concept: Event Handlers with Parameters
         * onClick handlers call functions passed as props with item.id as parameter.
         * This demonstrates how child components can trigger parent state changes.
         */}
        <button onClick={() => decreaseQuantity(item.id)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => increaseQuantity(item.id)}>+</button>
        <button className="remove-btn" onClick={() => removeItem(item.id)}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;