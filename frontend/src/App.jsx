import { Routes, Route, useLocation } from "react-router-dom";

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
import OrderSuccess from "./pages/OrderSuccess";

function App() {
  const location = useLocation();

  // Pages where banner should appear
  const showBanner =
    location.pathname === "/" ||
    location.pathname === "/sale" ||
    location.pathname === "/men" ||
    location.pathname === "/women";

  return (
    <>
      <TopBar />
      <Navbar />

      {showBanner && <Banner />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sale" element={<SalePage />} />
        <Route path="/men" element={<CategoryPage />} />
        <Route path="/women" element={<WomenCategoryPage />} />
        <Route path="/kids" element={<KidsCategoryPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order-success" element={<OrderSuccess />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
