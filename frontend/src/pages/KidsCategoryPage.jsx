import "../styles/category.css";
import ProductCard from "../components/ProductCard";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Kids Blue Sports Shoes",
    price: 899,
    oldPrice: 1599,
    discount: 44,
    image: "/images/kids1.webp",
  },
  {
    id: 2,
    name: "Kids Velcro Running Shoes",
    price: 799,
    oldPrice: 1499,
    discount: 47,
    image: "/images/kids2.webp",
  },
  {
    id: 3,
    name: "Kids Casual Sneakers",
    price: 999,
    oldPrice: 1799,
    discount: 44,
    image: "/images/kids3.webp",
  },
  {
    id: 4,
    name: "Kids Walking Shoes",
    price: 1099,
    oldPrice: 1999,
    discount: 45,
    image: "/images/kids4.webp",
  },
];

function KidsCategoryPage() {
  const [openFilter, setOpenFilter] = useState(null);

  const toggle = (name) => {
    setOpenFilter(openFilter === name ? null : name);
  };

  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb">
        HOME / SHOP / KIDS&apos; SHOES
      </div>

      <div className="category-layout">
        {/* FILTERS */}
        <aside className="filters">
          {["PRICE", "DISCOUNT", "SIZE", "COLOR", "PRODUCT TYPE"].map((title) => (
            <div className="filter-block" key={title}>
              <div
                className="filter-title"
                onClick={() => toggle(title)}
              >
                {title} <span>{openFilter === title ? "▲" : "▼"}</span>
              </div>
              {openFilter === title && (
                <div className="filter-options">
                  <label><input type="checkbox" /> Option 1</label>
                  <label><input type="checkbox" /> Option 2</label>
                </div>
              )}
            </div>
          ))}
        </aside>

        {/* PRODUCTS */}
        <div className="category-content">
          <div className="category-header">
            <div>
              <h2>Kids&apos; Shoes</h2>
              <p>268 products</p>
            </div>

            <select>
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
