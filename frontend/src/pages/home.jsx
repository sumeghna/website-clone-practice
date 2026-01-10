import ProductCard from "../components/ProductCard";
import "../styles/product.css";

const products = [
  { id: 1, name: "Direct White Men's Running Shoes", price: 2500, oldPrice: 4500, discount: 38, image: "/images/p1.webp" },
  { id: 2, name: "Direct White Men's Running Shoes", price: 1599, oldPrice: 2599, discount: 38, image: "/images/p2.webp" },
  { id: 3, name: "Direct White Men's Running Shoes", price: 1599, oldPrice: 2599, discount: 38, image: "/images/p3.webp" },
  { id: 4, name: "Direct White Men's Running Shoes", price: 1599, oldPrice: 2599, discount: 38, image: "/images/p4.webp" },
];

function Home() {
  return (
    <div style={{ padding: "40px" }}>
      <h2 style={{ marginBottom: "20px" }}>New Arrivals</h2>

      <div className="product-grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}

export default Home;
