import { Routes, Route, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Banner from "./components/Banner";

import Home from "./pages/home";
import CategoryPage from "./pages/CategoryPage";
import WomenCategoryPage from "./pages/WomenCategoryPage";
import KidsCategoryPage from "./pages/KidsCategoryPage";
import SalePage from "./pages/SalePage";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import OrderSuccess from "./pages/OrderSuccess";

// AUTH PAGES
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  const location = useLocation();

  // Pages where the banner should appear
  const showBanner =
    location.pathname === "/" ||
    location.pathname === "/sale" ||
    location.pathname === "/men" ||
    location.pathname === "/women" ||
    location.pathname === "/kids";

  // Hide Navbar & Footer on auth pages
  const hideLayout =
    location.pathname === "/register" ||
    location.pathname === "/login";

  return (
    <>
      {!hideLayout && <TopBar />}
      {!hideLayout && <Navbar />}

      {/* GLOBAL TOAST */}
      <ToastContainer position="top-right" autoClose={1500} />

      {!hideLayout && showBanner && <Banner />}

      <Routes>
        {/* MAIN PAGES */}
        <Route path="/" element={<Home />} />
        <Route path="/sale" element={<SalePage />} />
        <Route path="/men" element={<CategoryPage />} />
        <Route path="/women" element={<WomenCategoryPage />} />
        <Route path="/kids" element={<KidsCategoryPage />} />

        {/* AUTH */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* CART + PAYMENT FLOW */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/order-success" element={<OrderSuccess />} />
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
}

export default App;
