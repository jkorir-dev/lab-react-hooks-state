import React, { useState } from 'react';
import ProductList from './components/ProductList';
import DarkModeToggle from './components/DarkModeToggle';
import Cart from './components/Cart';

const App = () => {
  // 1. State for dark mode toggle
  const [darkMode, setDarkMode] = useState(false);

  // 2. State for cart management
  const [cart, setCart] = useState([]);

  // 3. State for category filtering
  const [category, setCategory] = useState('all');

  const handleToggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const handleAddToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div className={darkMode ? 'app dark' : 'app light'}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      <DarkModeToggle
        darkMode={darkMode}
        onToggleDarkMode={handleToggleDarkMode}
      />

      <label htmlFor="category-filter">Filter by Category: </label>
      <select
        id="category-filter"
        value={category}
        onChange={handleCategoryChange}
      >
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList
        category={category}
        onAddToCart={handleAddToCart}
      />

      <Cart cart={cart} />
    </div>
  );
};

export default App;
