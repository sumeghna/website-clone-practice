import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CategorySection from "../components/CategorySection";
import productSection from "../components/ProductSection";

function Home() {
  return (
    <div>
      <productSection />
      <CategorySection />
        <Navbar />
        <Hero />
      <h1>Campus Shoes Home Page</h1>
      <p>Welcome to the Campus Shoes clone</p>
    </div>
  );
}


export default Home;    