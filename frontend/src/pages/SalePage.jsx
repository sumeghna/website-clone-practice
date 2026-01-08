import "../styles/category.css";
import ProductCard from "../components/ProductCard";
import { useState } from "react";

/* ============================
   SALE PRODUCT LIST
============================= */
const saleProducts = [
  {
    id: 1,
    name: "DRIPP Off White Men's Sneakers",
    price: 1449,
    oldPrice: 3499,
    discount: 59,
    rating: 4.5,
    reviews: 16,
    image: "/images/sale1.webp",
    sizes: [6, 7, 8, 9, 10],
    tag: "BEST SELLER",
  },
  {
    id: 2,
    name: "GRIT Beige Women's Sneaker",
    price: 1299,
    oldPrice: 2599,
    discount: 50,
    rating: 4.7,
    reviews: 24,
    image: "/images/sale2.webp",
    sizes: [4, 5, 6, 7, 8],
    tag: "BEST SELLER",
  },
  {
    id: 3,
    name: "DRIVO Grey Men's Running Shoes",
    price: 1299,
    oldPrice: 2499,
    discount: 48,
    rating: 4.6,
    reviews: 16,
    image: "/images/sale3.webp",
    sizes: [6, 7, 8, 9, 10],
    tag: "BEST SELLER",
  },
  {
    id: 4,
    name: "BRISK Beige Men's Sneakers",
    price: 1399,
    oldPrice: 2899,
    discount: 52,
    rating: 4.7,
    reviews: 31,
    image: "/images/sale4.webp",
    sizes: [6, 7, 8, 9, 10],
    tag: "NEW ARRIVAL",
  },
];

/* ============================
           FILTER DATA
============================= */
const filterData = {
  PRICE: ["Under ₹1000", "₹1000 - ₹2000", "Above ₹2000"],
  DISCOUNT: ["10% & Above", "20% & Above", "30% & Above", "40% & Above"],
  SIZE: ["6", "7", "8", "9", "10"],
  COLOR: ["Black", "White", "Grey", "Beige"],
  "PRODUCT TYPE": ["Sneakers", "Running Shoes", "Casual Shoes"]
};

function SalePage() {
  const [openFilter, setOpenFilter] = useState(null);

  const toggleFilter = (name) => {
    setOpenFilter(prev => prev === name ? null : name);
  };

  return (
    <>
      {/* BREADCRUMB */}
      <div className="breadcrumb">
        HOME / SHOP / SALE
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
              <h2>Sale</h2>
              <p>{saleProducts.length} products</p>
            </div>

            <select className="sort">
              <option>Sort</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Discount</option>
            </select>
          </div>

          <div className="product-grid">
            {saleProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default SalePage;
