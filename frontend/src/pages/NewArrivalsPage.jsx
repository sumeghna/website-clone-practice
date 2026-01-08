import "../styles/category.css";
import ProductCard from "../components/ProductCard";
import { useState } from "react";

/* PRODUCTS */
const products = [
  { id: 1, name: "REEGO White Men's Sneakers", price: 2349, oldPrice: 3999, discount: 42, image: "/images/p1.webp" },
  { id: 2, name: "JUBBEE White Women's Sneakers", price: 1499, oldPrice: 2599, discount: 45, image: "/images/p2.webp" },
  { id: 3, name: "DIRECT White Men's Running Shoes", price: 1429, oldPrice: 2599, discount: 45, image: "/images/p3.webp" },
  { id: 4, name: "PIXAR White Men's Sneakers", price: 2469, oldPrice: 3599, discount: 31, image: "/images/p4.webp" },
];

/* FILTER DATA */
const filterData = {
  PRICE: ["Rs. 1,001 - Rs. 1,500", "Rs. 1,501 - Rs. 2,000", "Rs. 2,001 - Rs. 2,500"],
  DISCOUNT: ["10% & Above", "20% & Above", "30% & Above", "40% & Above"],
  SIZE: ["6", "7", "8", "9", "10"],
  COLOR: ["White", "Black", "Grey"],
  "PRODUCT TYPE": ["Sneakers", "Running Shoes"]
};

function NewArrivalsPage() {
  const [open, setOpen] = useState(null);
  const toggle = (name) => setOpen(open === name ? null : name);

  return (
    <>
      {/* BANNER */}
      <div className="category-banner">
        <img src="/images/new-arrivals-banner.webp" alt="New Arrivals" />
        <div className="banner-text">
          <h1>UNMATCHED</h1>
          <span>Comfort</span>
        </div>
      </div>

      {/* BREADCRUMB */}
      <div className="breadcrumb container">
        HOME / SHOP / NEW ARRIVALS
      </div>

      <div className="category-layout">
        {/* SIDEBAR */}
        <aside className="filters">
          {Object.keys(filterData).map((filter) => (
            <div className="filter-block" key={filter}>
              <div className="filter-header" onClick={() => toggle(filter)}>
                <h4>{filter}</h4>
                <span className={`arrow ${open === filter ? "open" : ""}`}>▼</span>
              </div>

              {open === filter && (
                <div className="filter-options">
                  {filterData[filter].map((opt, i) => (
                    <label key={i}>
                      <input type="checkbox" /> {opt}
                    </label>
                  ))}
                </div>
              )}
            </div>
          ))}
        </aside>

        {/* PRODUCTS */}
        <div className="category-content">
          <div className="category-header">
            <div className="title">
              <div className="view-icons">⬛⬛⬛ ⬛⬛⬛</div>
              <h2>New Arrivals</h2>
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

export default NewArrivalsPage;
