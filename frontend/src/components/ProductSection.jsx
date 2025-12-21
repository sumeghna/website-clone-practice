import ProductCard from "./ProductCard";
import "../styles/product.css";

const products = [
    {id:1, name: "Campus Oxyfit", price: "₹999"},
    {id:2, name: "Campus Sutra", price:"₹1199"},
    {id:3, name:"Campus Nitro", price:"₹1499"},
    {id:4, name:"Campus Flash", price:"₹1299"},
];


function productSection({title}){
    return(
       <section className="product-section">
        <h2>{title}</h2>
        <div className="product-grid">
            {products.map((p)=>(
                <ProductCard key={p.id} product={p} />
                
            ))}
        </div>
       </section>
    );
}
export default productSection;