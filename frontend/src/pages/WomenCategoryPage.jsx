import "../styles/category.css";
import ProductCard from "../components/ProductCard";
import { useState } from "react";

/* ============================
   WOMEN PRODUCT LIST
============================= */
const products = [
  { id: 1, name: "Women Flex Pink Running Shoes", price: 1499, oldPrice: 2799, discount: 46, image: "/images/women1.webp" },
  { id: 2, name: "Women Lite Grey Sports Shoes", price: 1299, oldPrice: 2499, discount: 48, image: "/images/women2.webp" },
  { id: 3, name: "Women Slip-On Casual Shoes", price: 999, oldPrice: 1999, discount: 50, image: "/images/women3.webp" },
  { id: 4, name: "Women Navy Walking Shoes", price: 1399, oldPrice: 2699, discount: 48, image: "/images/women4.webp" },
];

/* ============================
          FILTER DATA
============================= */
const filterData = {
  PRICE: ["Under ₹1000", "₹1000 - ₹1500", "₹1500 - ₹2000", "Above ₹2000"],
  DISCOUNT: ["10% & Above", "20% & Above", "30% & Above", "40% & Above", "50% & Above"],
  SIZE: ["4", "5", "6", "7", "8", "9"],
  COLOR: ["Black", "White", "Grey", "Pink", "Blue"],
  "PRODUCT TYPE": [
    "Women Running Shoes",
    "Women Sneakers",
    "Women Walking Shoes",
    "Women Sports Shoes",
    "Women Casual Shoes",
  ],
};

function WomenCategoryPage() {
  const [openFilter, setOpenFilter] = useState(null);

  const toggleFilter = (name) => {
    setOpenFilter(prev => prev === name ? null : name);
  };

  return (
    <>
      {/* BREADCRUMB */}
      <div className="breadcrumb">
        HOME / SHOP / WOMEN&apos;S SHOES
      </div>

      <div className="category-layout">
        
        {/* FILTER SIDEBAR */}
        <aside className="filters">
          {Object.keys(filterData).map((filterName) => (
            <div className="filter-block" key={filterName}>
              <div className="filter-header" onClick={() => toggleFilter(filterName)}>
                <h4>{filterName}</h4>
                <span className={`arrow ${openFilter === filterName ? "open" : ""}`}>
                  ▼
                </span>
              </div>

              {openFilter === filterName && (
                <div className="filter-options">
                  {filterData[filterName].map((opt, i) => (
                    <label key={i} className="filter-option">
                      <input type="checkbox" /> {opt}
                    </label>
                  ))}
                </div>
              )}
            </div>
          ))}
        </aside>

        {/* PRODUCT AREA */}
        <div className="category-content">
          <div className="category-header">
            <div className="title">
              <h2>Women&apos;s Shoes</h2>
              <p>{products.length} products</p>
            </div>

            <select className="sort">
              <option>Sort</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Discount</option>
            </select>
          </div>

          <div className="product-grid">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default WomenCategoryPage;
