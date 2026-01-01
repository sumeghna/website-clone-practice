import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Cart() {
    const { cart } = useCart();
    const navigate = useNavigate();

    if (cart.length === 0) {
        return <h2 style={{ textAlign: "center" }}>Cart is empty</h2>;
    }

    return (
        <div style={{ padding: "30px" }}>
            <h2>Your Cart</h2>

            {cart.map((item, index) => (
                <div key={index} style={{ marginBottom: "10px" }}>
                    {item.name} - ₹{item.price}
                </div>
            ))}

            <button onClick={() => navigate("/payment")}>
                Proceed to Payment
            </button>
        </div>
    );
}

export default Cart;
