import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      {/* Main Navbar */}
      <div className="navbar">
        <div className="nav-left">🔍 Search</div>

        <div className="nav-center">
          <h1>CAMPUS</h1>
          <small>move your way</small>
        </div>

        <div className="nav-right">
          <Link to="/wishlist">Wishlist</Link>
          <Link to="/cart">Cart</Link>
          <span>Stores</span>
          <span>Track Order</span>
        </div>
      </div>

      {/* Category Menu */}
      <div className="category-menu">
        {/* FIXED */}
        <Link to="/sale">SALE</Link>

        <Link to="/new-arrivals">NEW ARRIVALS</Link>


        {/* MAIN CATEGORY LINKS */}
        <Link to="/men">MEN</Link>
        <Link to="/women">WOMEN</Link>
        <Link to="/kids">KIDS</Link>

        {/* PLACEHOLDER LINKS */}
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
