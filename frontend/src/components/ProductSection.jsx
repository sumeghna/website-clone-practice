import ProductCard from "./ProductCard";
import "../styles/product.css";

const products = [
    {
        id: 1,
        name: "Campus Oxyfit",
        price: 999,
        image: "/images/oxyfit.jpg.png"
    },
    {
        id: 2,
        name: "Campus Sutra",
        price: 1199,
        image: "/images/sutra.jpg.png"
    },
    {
        id: 3,
        name: "Campus Nitro",
        price: 34499,
        image: "/images/nitro.jpg.png"
    },
    {
        id: 4,
        name: "Campus Flash",
        price: 1299,
        image: "/images/flash.jpg.png"
    }
];

function ProductSection({ title = "Products" }) {
    return (
        <section className="product-section">
            <h2>{title}</h2>

            <div className="product-grid">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
}

export default ProductSection;
