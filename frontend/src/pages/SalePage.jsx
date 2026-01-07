import "../styles/category.css";
import ProductCard from "../components/ProductCard";

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

function SalePage() {
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb">HOME / SHOP / SALE</div>

      <div className="category-layout">
        {/* LEFT FILTERS */}
        <aside className="filters">
          <Filter title="PRICE" />
          <Filter title="DISCOUNT" />
          <Filter title="SIZE" />
          <Filter title="COLOR" />
          <Filter title="PRODUCT TYPE" />
        </aside>

        {/* RIGHT CONTENT */}
        <div className="category-content">
          <div className="category-header">
            <div>
              <h2>Sale</h2>
              <p>2068 products</p>
            </div>

            <select>
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

/* Reusable filter dropdown */
function Filter({ title }) {
  return (
    <details className="filter-box">
      <summary>{title}</summary>
      <div className="filter-content">
        <label><input type="checkbox" /> Option 1</label>
        <label><input type="checkbox" /> Option 2</label>
        <label><input type="checkbox" /> Option 3</label>
      </div>
    </details>
  );
}

export default SalePage;
