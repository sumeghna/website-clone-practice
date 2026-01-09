import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import LoginModal from "./LoginModal";
import { FaRegUser } from "react-icons/fa";

function Navbar() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <div className="navbar">
        <div className="nav-left">🔍 Search</div>

        <div className="nav-center">
          <h1>CAMPUS</h1>
          <small>move your way</small>
        </div>

        <div className="nav-right">
          {/* 👤 PROFILE ICON (Campus-style) */}
          <span
            className="profile-icon"
            onClick={() => setShowLogin(true)}
          >
            <FaRegUser />
          </span>

          <Link to="/wishlist">Wishlist</Link>
          <Link to="/cart">Cart</Link>
          <span>Stores</span>
          <span>Track Order</span>
        </div>
      </div>

      <div className="category-menu">
        <Link to="/sale">SALE</Link>
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

      {/* 🔐 LOGIN MODAL */}
      {showLogin && <LoginModal close={() => setShowLogin(false)} />}
    </>
  );
}

export default Navbar;
