function ProductCard({ product }) {
  return (
    <div className="product-card">

      {/* IMAGE CONTAINER */}
      <div className="product-image">
        <span className="discount">{product.discount}% off</span>
        <span className="wishlist">♡</span>

        {/* BADGE */}
        {product.badge && (
          <span className="badge">{product.badge}</span>
        )}

        <img src={product.image} alt={product.name} />
      </div>

      {/* PRODUCT INFO */}
      <h3>{product.name}</h3>

      <div className="rating">
        ⭐⭐⭐⭐⭐ <span>4.6 | 16 Reviews</span>
      </div>

      <p className="price">
        Rs. {product.price}
        <span className="old"> Rs. {product.oldPrice}</span>
        <span className="sale"> Sale</span>
      </p>
    </div>
  );
}

export default ProductCard;
