import "../styles/category.css";
import ProductCard from "../components/ProductCard";
import { useState } from "react";

/* ============================
   KIDS PRODUCT LIST
============================= */
const products = [
  { id: 1, name: "Kids Blue Sports Shoes", price: 899, oldPrice: 1599, discount: 44, image: "/images/kids1.webp" },
  { id: 2, name: "Kids Velcro Running Shoes", price: 799, oldPrice: 1499, discount: 47, image: "/images/kids2.webp" },
  { id: 3, name: "Kids Casual Sneakers", price: 999, oldPrice: 1799, discount: 44, image: "/images/kids3.webp" },
  { id: 4, name: "Kids Walking Shoes", price: 1099, oldPrice: 1999, discount: 45, image: "/images/kids4.webp" },
];

/* ============================
          FILTER DATA
============================= */
const filterData = {
  PRICE: ["Rs. 501 - Rs. 1,000", "Rs. 1,001 - Rs. 1,500", "Rs. 1,501 & Above"],
  DISCOUNT: ["10% & Above", "20% & Above", "30% & Above", "40% & Above"],
  SIZE: ["10C", "11C", "12C", "1Y", "2Y", "3Y"],
  COLOR: ["Black", "White", "Blue", "Pink"],
  "PRODUCT TYPE": [
    "Kids Sneakers",
    "Kids Running Shoes",
    "Kids Casual Shoes",
    "Kids Walking Shoes",
  ],
};

function KidsCategoryPage() {
  const [openFilter, setOpenFilter] = useState(null);

  const toggleFilter = (name) => {
    setOpenFilter(prev => prev === name ? null : name);
  };

  return (
    <>
      {/* BREADCRUMB */}
      <div className="breadcrumb">
        HOME / SHOP / KIDS&apos; SHOES
      </div>

      <div className="category-layout">

        {/* =======================
              FILTER SIDEBAR
        ======================== */}
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
                  {filterData[filterName].map((option, i) => (
                    <label key={i} className="filter-option">
                      <input type="checkbox" /> {option}
                    </label>
                  ))}
                </div>
              )}
            </div>
          ))}
        </aside>

        {/* =======================
              PRODUCT CONTENT
        ======================== */}
        <div className="category-content">
          <div className="category-header">
            <div className="title">
              <h2>Kids&apos; Shoes</h2>
              <p>{products.length} products</p>
            </div>

            <select className="sort">
              <option>Sort</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
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

export default KidsCategoryPage;
