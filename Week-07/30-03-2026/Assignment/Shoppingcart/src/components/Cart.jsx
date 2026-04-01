import CartItem from "./CartItem";

// React Concept: Functional Component with Multiple Props
// Cart component displays the shopping cart and handles cart operations.
// Parent-Child Relationship: Cart is a child of App, parent of CartItem.
// Props: Receives cart array, handler functions, and computed totals from App.
// This demonstrates passing multiple callback functions as props.
function Cart({
  cart,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  totalPrice,
  totalQuantity,
}) {
  return (
    <div className="cart-section">
      <h2>Cart</h2>

      {/* React Concept: Conditional Rendering
       * We use conditional rendering to show different content based on cart state.
       * If cart is empty, show empty message; otherwise, show cart items and totals.
       * This is achieved using ternary operator or && operator.
       */}
      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty 🛍️</p>
      ) : (
        <>
          {/* React Concept: Rendering Lists
           * Similar to ProductList, we map over cart array to render CartItem components.
           * Each cart item becomes a CartItem component.
           * Parent-Child: Cart renders multiple CartItem children.
           */}
          {cart.map((item) => (
            <CartItem
              // React Concept: Key Prop for List Items
              // Key helps React optimize re-renders when cart changes.
              key={item.id}
              // Props Flow: Passing item data and handler functions to child
              item={item}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              removeItem={removeItem}
            />
          ))}

          {/* React Concept: Displaying Computed Values
           * totalPrice and totalQuantity are computed in parent (App) and passed as props.
           * This shows how derived state can be passed down to child components.
           */}
          <div className="cart-total">
            <h3>Total Items: {totalQuantity}</h3>
            <h3>Total: ₹{totalPrice}</h3>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;