import "../styles/category.css";
import ProductCard from "../components/ProductCard";
import { useState } from "react";

/* ============================
   PRODUCT LIST (STATIC SAMPLE)
============================= */
const products = [
  { id: 1, name: "Direct White Men's Running Shoes", price: 2500, oldPrice: 4500, discount: 38, image: "/images/p1.webp" },
  { id: 2, name: "Direct White Men's Running Shoes", price: 1599, oldPrice: 2599, discount: 38, image: "/images/p2.webp" },
  { id: 3, name: "Direct White Men's Running Shoes", price: 1599, oldPrice: 2599, discount: 38, image: "/images/p3.webp" },
  { id: 4, name: "Direct White Men's Running Shoes", price: 1599, oldPrice: 2599, discount: 38, image: "/images/p4.webp" },
  { id: 5, name: "Direct White Men's Running Shoes", price: 1599, oldPrice: 2599, discount: 38, image: "/images/p5.webp" },
  { id: 6, name: "Camp Erik Grey Men's Running Shoes", price: 1139, oldPrice: 1899, discount: 40, image: "/images/p6.webp" },
  { id: 7, name: "Brazil Pro Grey Men's Running Shoes", price: 875, oldPrice: 1749, discount: 50, image: "/images/p7.webp" },
  { id: 8, name: "Remo Navy Men's Running Shoes", price: 908, oldPrice: 1699, discount: 47, image: "/images/p8.webp" },
];

/* ============================
      FILTER DATA
============================= */
const filterData = {
  PRICE: [
    "Rs. 501 - Rs. 1,000",
    "Rs. 1,001 - Rs. 1,500",
    "Rs. 1,501 - Rs. 2,000",
    "Rs. 2,001 - Rs. 2,500",
    "Rs. 2,501 & Above",
  ],
  DISCOUNT: [
    "Less Than 10%",
    "10% & Above",
    "20% & Above",
    "30% & Above",
    "40% & Above",
    "50% & Above",
  ],
  SIZE: ["4", "5", "6", "7", "8", "9", "10", "11"],
  "PRODUCT TYPE": [
    "Men Running Shoes",
    "Men Sports Shoes",
    "Men Sneakers",
    "Men Walking Shoes",
    "Men Casual Shoes"
  ]
};

function CategoryPage() {
  const [open, setOpen] = useState(null);

  const toggle = (name) => {
    setOpen(open === name ? null : name);
  };

  return (
    <>
      {/* BREADCRUMB */}
      <div className="breadcrumb">
        HOME / SHOP / MEN&apos;S RUNNING SHOES
      </div>

      <div className="category-layout">
        
        {/* =======================
              FILTER SIDEBAR
        ======================== */}
        <aside className="filters">
          {Object.keys(filterData).map((filterName) => (
            <div className="filter-block" key={filterName}>
              <div className="filter-header" onClick={() => toggle(filterName)}>
                <h4>{filterName}</h4>
                <span className={`arrow ${open === filterName ? "open" : ""}`}>▼</span>
              </div>

              {open === filterName && (
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
              RIGHT PRODUCT GRID
        ======================== */}
        <div className="category-content">
          <div className="category-header">
            <div className="title">
              <h2>Men&apos;s Running Shoes</h2>
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

export default CategoryPage;
