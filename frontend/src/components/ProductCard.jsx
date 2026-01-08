import { useCart } from "../context/CartContext";
import { toast } from "react-toastify";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    toast.success("Added to cart!", {
      position: "top-right",
      autoClose: 1300,
    });
  };

  return (
    <div className="product-card">

      {/* IMAGE CONTAINER */}
      <div className="product-image">
        <span className="discount">{product.discount}% off</span>
        <span className="wishlist">♡</span>

        {/* BADGE (BEST SELLER / NEW ARRIVAL) */}
        {product.badge && (
          <span className="badge">{product.badge}</span>
        )}

        <img src={product.image} alt={product.name} />
      </div>

      {/* PRODUCT INFO */}
      <h3 className="product-name">{product.name}</h3>

      {/* RATING */}
      <div className="rating">
        ⭐⭐⭐⭐⭐ <span>4.6 | 16 Reviews</span>
      </div>

      {/* PRICE */}
      <p className="price">
        Rs. {product.price}
        <span className="old"> Rs. {product.oldPrice}</span>
        <span className="sale"> Sale</span>
      </p>

      {/* SIZES (OPTIONAL – CAMPUS STYLE) */}
      <div className="sizes">
        6&nbsp;7&nbsp;8&nbsp;9&nbsp;10
      </div>

      {/* ADD TO CART */}
      <button
        className="add-to-cart"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>

    </div>
  );
}

export default ProductCard;
