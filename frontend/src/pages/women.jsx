import ProductCard from "../components/ProductCard";
import "../styles/women.css";

const womenProducts = [
  {
    id: 1,
    name: "Glimpse Mauve Wine",
    price: 1399,
    image: "./src/women/women1.webp",
    badge: "BEST SELLER",
    discount: "50% off"
  },
  {
    id: 2,
    name: "Campus Bliss Pink",
    price: 1599,
    image: "./src/women/women2.webp",
    badge: "NEW ARRIVAL"
  },
  {
    id: 3,
    name: "Campus Ace White",
    price: 1299,
    image: "./src/women/women3.webp",
    badge: "BEST SELLER"
  },
  {
    id: 4,
    name: "Campus Nova Rose",
    price: 1499,
    image: "./src/women/women4.webp",
    badge: "NEW ARRIVAL"
  }
];

function Women() {
  return (
    <div className="women-page">

      {/* Banner */}
      <div className="women-banner">
        <img src="./src/women/women_banner.png" alt="Women's Banner" />
      </div>

      {/* Breadcrumb */}
      <div className="breadcrumb">
        HOME / SHOP / WOMEN'S FOOTWEAR
      </div>

      {/* Content */}
      <div className="women-content">

        {/* Sidebar */}
        <aside className="women-sidebar">
          {["PRICE", "DISCOUNT", "SIZE", "COLOR", "PRODUCT TYPE"].map(item => (
            <div className="filter" key={item}>
              <h4>{item}</h4>
            </div>
          ))}
        </aside>

        {/* Products */}
        <section className="women-products">
          <div className="products-header">
            <h2>Women's Footwear</h2>
            <span>482 products</span>

            <select>
              <option>Sort</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>

          <div className="women-grid">
            {womenProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}

export default Women;
