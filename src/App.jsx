import React, { useState } from "react";
import ProductList from "./components/ProductList";
import DarkModeToggle from "./components/DarkModeToggle";
import Cart from "./components/Cart";

const App = () => {
  // TODO: Implement state for dark mode toggle
  const [darkMode, setDarkMode] = useState(false);

  function switchMode() {
    setDarkMode((prevMode) => !prevMode);
  }

  // TODO: Implement state for cart management
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart((prevCart) => [...prevCart, product]); // used spread operator to avoid nested array
  }

  // TODO: Implement state for category filtering
  const [category, setCategory] = useState("all");

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      {/* TODO: Render DarkModeToggle and implement dark mode functionality */}
      <DarkModeToggle darkMode={darkMode} switchMode={switchMode} />

      {/* TODO: Implement category filter dropdown */}
      <label>Filter by Category: </label>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList category={category} addToCart={addToCart} />

      {/* TODO: Implement and render Cart component */}
      <Cart cart={cart} />
    </div>
  );
};

export default App;
