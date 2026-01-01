import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      {/* Top Offer Bar */}
      <div className="top-offer">
        Get EXTRA 15% OFF On Orders Above ₹1299* Code: NEW15 | Get EXTRA 20% OFF
        On Orders Above ₹1999* Code: NEW20
      </div>

      {/* Main Navbar */}
      <div className="navbar">
        {/* Left */}
        <div className="nav-left">
          🔍 <span>Search</span>
        </div>

        {/* Center Logo */}
        <div className="nav-center">
          <h1>CAMPUS</h1>
          <small>move your way</small>
        </div>

        {/* Right Icons */}
        <div className="nav-right">
          <Link to="/wishlist">❤ Wishlist</Link>
          <Link to="/cart">🛒 Cart</Link>
          <span>📍 Stores</span>
          <span>📦 Track Order</span>
        </div>
      </div>

      {/* Category Menu */}
      <div className="category-menu">
        <Link to="/">SALE</Link>
        <Link to="/">NEW ARRIVALS</Link>
        <Link to="/men">MEN</Link>
        <Link to="/women">WOMEN</Link>
        <Link to="/kids">KIDS</Link>
        <Link to="/">APPARELS</Link>
        <Link to="/">ACCESSORIES</Link>
        <Link to="/">COLLECTIONS</Link>
        <Link to="/">TRENDING</Link>
        <Link to="/">INSTITUTIONAL</Link>
      </div>
    </>
  );
}

export default Navbar;
