import "../styles/category.css";

function CategorySection() {
  return (
    <section className="category-section">
      <div className="category-card men">
      
        <h2>Men</h2>
      </div>
      <div className="category-card women">
        <h2>Women</h2>
      </div>
      <div className = "category-card kids">
        <h2>Kids</h2>
      </div>
    </section>
  );
}

export default CategorySection;