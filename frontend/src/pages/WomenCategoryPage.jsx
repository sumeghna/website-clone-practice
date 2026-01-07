import "../styles/category.css";
import ProductCard from "../components/ProductCard";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Women Flex Pink Running Shoes",
    price: 1499,
    oldPrice: 2799,
    discount: 46,
    image: "/images/women1.webp",
  },
  {
    id: 2,
    name: "Women Lite Grey Sports Shoes",
    price: 1299,
    oldPrice: 2499,
    discount: 48,
    image: "/images/women2.webp",
  },
  {
    id: 3,
    name: "Women Slip-On Casual Shoes",
    price: 999,
    oldPrice: 1999,
    discount: 50,
    image: "/images/women3.webp",
  },
  {
    id: 4,
    name: "Women Navy Walking Shoes",
    price: 1399,
    oldPrice: 2699,
    discount: 48,
    image: "/images/women4.webp",
  },
];

function WomenCategoryPage() {
  const [openFilter, setOpenFilter] = useState(null);

  const toggle = (name) => {
    setOpenFilter(openFilter === name ? null : name);
  };

  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb">
        HOME / SHOP / WOMEN&apos;S SHOES
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
              <h2>Women&apos;s Shoes</h2>
              <p>412 products</p>
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

export default WomenCategoryPage;
