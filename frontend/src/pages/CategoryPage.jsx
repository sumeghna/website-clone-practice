import "../styles/category.css";
import ProductCard from "../components/ProductCard";
import { useState } from "react";

/* PRODUCTS (unchanged) */
const products = [
  {
    id: 1,
    name: "Direct White Men's Running Shoes",
    price: 2500,
    oldPrice: 4500,
    discount: 38,
    image: "/images/p1.webp",
  },
  {
    id: 2,
    name: "Direct White Men's Running Shoes",
    price: 1599,
    oldPrice: 2599,
    discount: 38,
    image: "/images/p2.webp",
  },
  {
    id: 3,
    name: "Direct White Men's Running Shoes",
    price: 1599,
    oldPrice: 2599,
    discount: 38,
    image: "/images/p3.webp",
  },
  {
    id: 4,
    name: "Direct White Men's Running Shoes",
    price: 1599,
    oldPrice: 2599,
    discount: 38,
    image: "/images/p4.webp",
  },
  {
    id: 5,
    name: "Direct White Men's Running Shoes",
    price: 1599,
    oldPrice: 2599,
    discount: 38,
    image: "/images/p5.webp",
  },
  {
    id: 6,
    name: "Camp Erik Grey Men's Running Shoes",
    price: 1139,
    oldPrice: 1899,
    discount: 40,
    image: "/images/p6.webp",
  },
  {
    id: 7,
    name: "Brazil Pro Grey Men's Running Shoes",
    price: 875,
    oldPrice: 1749,
    discount: 50,
    image: "/images/p7.webp",
  },
  {
    id: 8,
    name: "Remo Navy Men's Running Shoes",
    price: 908,
    oldPrice: 1699,
    discount: 47,
    image: "/images/p8.webp",
  },
];

/* FILTER DATA */
const priceOptions = [
  "Rs. 501 - Rs. 1,000",
  "Rs. 1,001 - Rs. 1,500",
  "Rs. 1,501 - Rs. 2,000",
  "Rs. 2,001 - Rs. 2,500",
  "Rs. 2,501 & Above",
];

const discountOptions = [
  "Less Than 10%",
  "10% & Above",
  "20% & Above",
  "30% & Above",
  "40% & Above",
  "50% & Above",
];

const sizeOptions = ["4", "5", "6", "7", "8", "9", "10", "11"];

const typeOptions = [
  "Men Running Shoes",
  "Men Sports Shoes",
  "Men Sneakers",
  "Men Walking Shoes",
  "Men Casual Shoes",
];

function CategoryPage() {
  const [openFilter, setOpenFilter] = useState(null);

  const toggle = (name) => {
    setOpenFilter(openFilter === name ? null : name);
  };

  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb">
        HOME / SHOP / MEN&apos;S RUNNING SHOES
      </div>

      <div className="category-layout">
        {/* LEFT FILTERS */}
        <aside className="filters">
          {/* PRICE */}
          <div className="filter-block">
            <div className="filter-title" onClick={() => toggle("price")}>
              PRICE <span>{openFilter === "price" ? "▲" : "▼"}</span>
            </div>
            {openFilter === "price" && (
              <div className="filter-options">
                {priceOptions.map((p, i) => (
                  <label key={i}>
                    <input type="checkbox" /> {p}
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* DISCOUNT */}
          <div className="filter-block">
            <div className="filter-title" onClick={() => toggle("discount")}>
              DISCOUNT <span>{openFilter === "discount" ? "▲" : "▼"}</span>
            </div>
            {openFilter === "discount" && (
              <div className="filter-options">
                {discountOptions.map((d, i) => (
                  <label key={i}>
                    <input type="checkbox" /> {d}
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* SIZE */}
          <div className="filter-block">
            <div className="filter-title" onClick={() => toggle("size")}>
              SIZE <span>{openFilter === "size" ? "▲" : "▼"}</span>
            </div>
            {openFilter === "size" && (
              <div className="filter-options">
                {sizeOptions.map((s) => (
                  <label key={s}>
                    <input type="checkbox" /> {s}
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* PRODUCT TYPE */}
          <div className="filter-block">
            <div className="filter-title" onClick={() => toggle("type")}>
              PRODUCT TYPE <span>{openFilter === "type" ? "▲" : "▼"}</span>
            </div>
            {openFilter === "type" && (
              <div className="filter-options">
                {typeOptions.map((t, i) => (
                  <label key={i}>
                    <input type="checkbox" /> {t}
                  </label>
                ))}
              </div>
            )}
          </div>
        </aside>

        {/* RIGHT CONTENT */}
        <div className="category-content">
          <div className="category-header">
            <div>
              <h2>Men&apos;s Running Shoes</h2>
              <p>699 products</p>
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

export default CategoryPage;
