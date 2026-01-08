import { Routes, Route,} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


import Home from "./pages/home";
import CategoryPage from "./pages/CategoryPage";
import WomenCategoryPage from "./pages/WomenCategoryPage";
import KidsCategoryPage from "./pages/KidsCategoryPage";
import SalePage from "./pages/SalePage";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import OrderSuccess from "./pages/OrderSuccess";

function App() {


  // Pages where the banner should appear

  return (
    <>
      <TopBar />
      <Navbar />

      {/* GLOBAL TOAST COMPONENT */}
      <ToastContainer position="top-right" autoClose={1500} />


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sale" element={<SalePage />} />
        <Route path="/men" element={<CategoryPage />} />
        <Route path="/women" element={<WomenCategoryPage />} />
        <Route path="/kids" element={<KidsCategoryPage />} />

        {/* CART + PAYMENT FLOW */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/order-success" element={<OrderSuccess />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
