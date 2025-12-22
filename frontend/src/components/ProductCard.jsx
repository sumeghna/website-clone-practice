function ProductCard({product}){
    return(
        <div className="product-card">
            <div className="img-placeholder">Image</div>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
        </div>
    )
}
export default ProductCard;