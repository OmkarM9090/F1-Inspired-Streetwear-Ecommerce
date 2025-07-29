import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Product';
import Category from './components/Category';
import ProductPage from './components/ProductPage';
import Cart from './components/Cart';
import Login from './components/Login';
import Signup from './components/Signup';
import ForgotPassword from './components/ForgotPassword';

function App() {
  const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode") === "true");

  function changetheme() {
    localStorage.setItem("darkMode", !darkMode);
    setDarkMode((prev) => !prev);
  }

  return (
    <Router>
      <Navbar dabba={darkMode} changetheme={changetheme} />
      <Routes>
        <Route path="/" element={<Home dabba={darkMode} changetheme={changetheme} />} />
        <Route path="/products" element={<Products dabba={darkMode} />} />
        <Route path="/category/tees" element={<Category dabba={darkMode} />} />
        <Route path="/product/:id" element={<ProductPage dabba={darkMode} />} />
        <Route path="/cart" element={<Cart dabba={darkMode} />} />
        <Route path="/login" element={<Login dabba={darkMode} />} />
        <Route path="/signup" element={<Signup dabba={darkMode} />} />
        <Route path="/forgot-password" element={<ForgotPassword dabba={darkMode} />} />

      </Routes>
    </Router>
  );
}

export default App;