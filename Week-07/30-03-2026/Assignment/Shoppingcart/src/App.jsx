import "./App.css";
import { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

// React Concept: Root Component and State Management
// App is the root component that manages the global state of the application.
// It uses useState hook to manage the cart state.
// Parent-Child Relationship: App is the parent of ProductList and Cart components.
// Props Flow: App passes products, addToCart to ProductList; cart and handler functions to Cart.
function App() {
  // React Concept: Static Data
  // Products array is static data that doesn't change during the app lifecycle.
  const products = [
    { id: 1, name: "React T-Shirt", price: 799 },
    { id: 2, name: "JavaScript Hoodie", price: 1499 },
    { id: 3, name: "CSS Cap", price: 499 },
    { id: 4, name: "Vite Mug", price: 349 },
  ];

  // React Concept: useState Hook
  // useState manages the cart state. cart is an array of items with quantity.
  // setCart is the setter function to update the cart.
  const [cart, setCart] = useState([]);

  // React Concept: Event Handler Functions
  // These functions handle cart operations and are passed as props to child components.
  // They demonstrate lifting state up - child components call these to update parent state.
  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      // React Concept: Immutability
      // We create a new array instead of mutating the existing cart array.
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const increaseQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cart
      .map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0);

    setCart(updatedCart);
  };

  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  // React Concept: Derived State
  // totalPrice and totalQuantity are computed from the cart state.
  // They are recalculated on every render when cart changes.
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const totalQuantity = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // React Concept: JSX Return
  // The return statement renders the UI using JSX.
  // It demonstrates component composition - combining ProductList and Cart.
  return (
    <div className="app">
      <h1 className="main-title">🛒 Mini Shopping Cart</h1>

      <div className="layout">
        {/* Parent-Child: App renders ProductList and passes props */}
        <ProductList products={products} addToCart={addToCart} />
        {/* Parent-Child: App renders Cart and passes props */}
        <Cart
          cart={cart}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          removeItem={removeItem}
          totalPrice={totalPrice}
          totalQuantity={totalQuantity}
        />
      </div>
    </div>
  );
}

export default App;