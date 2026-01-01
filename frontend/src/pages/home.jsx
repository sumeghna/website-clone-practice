import Hero from "../components/Hero";
import CategorySection from "../components/CategorySection";
import ProductSection from "../components/ProductSection";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Hero />
      <ProductSection />
      <CategorySection />

      {/* Go to Payment Button */}
      <div style={{ textAlign: "center", margin: "40px 0" }}>
        <Link to="/payment">
          <button
            style={{
              padding: "12px 30px",
              fontSize: "16px",
              backgroundColor: "#000",
              color: "#fff",
              border: "none",
              cursor: "pointer"
            }}
          >
            Go to Payment
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
