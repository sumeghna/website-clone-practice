import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Payment() {
  const navigate = useNavigate();
  const { clearCart } = useCart();

  const [form, setForm] = useState({
    cardNumber: "",
    cardHolder: "",
    expiry: "",
    cvv: "",
  });

  const [touched, setTouched] = useState({
    cardNumber: false,
    cardHolder: false,
    expiry: false,
    cvv: false,
  });

  const [serverError, setServerError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const setField = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  // Helpers
  const onlyDigits = (s) => String(s || "").replace(/\D/g, "");

  const validate = (values) => {
    const errors = {};

    // Card number: 16 digits (basic)
    const digits = onlyDigits(values.cardNumber);
    if (!digits) errors.cardNumber = "Card number is required.";
    else if (digits.length !== 16) errors.cardNumber = "Card number must be 16 digits.";

    // Card holder: basic required
    const name = values.cardHolder.trim();
    if (!name) errors.cardHolder = "Card holder name is required.";
    else if (name.length < 2) errors.cardHolder = "Name is too short.";

    // Expiry: MM/YY and not in the past
    const exp = values.expiry.trim();
    if (!exp) errors.expiry = "Expiry is required (MM/YY).";
    else if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(exp)) errors.expiry = "Use MM/YY format.";
    else {
      const [mmStr, yyStr] = exp.split("/");
      const mm = Number(mmStr);
      const yy = Number(yyStr);

      const now = new Date();
      const currentYY = now.getFullYear() % 100;
      const currentMM = now.getMonth() + 1;

      if (yy < currentYY || (yy === currentYY && mm < currentMM)) {
        errors.expiry = "Card is expired.";
      }
    }

    // CVV: 3 digits
    const cvvDigits = onlyDigits(values.cvv);
    if (!cvvDigits) errors.cvv = "CVV is required.";
    else if (cvvDigits.length !== 3) errors.cvv = "CVV must be 3 digits.";

    return errors;
  };

  const errors = useMemo(() => validate(form), [form]);
  const isValid = Object.keys(errors).length === 0;

  const markAllTouched = () =>
    setTouched({ cardNumber: true, cardHolder: true, expiry: true, cvv: true });

  const handlePayment = async (e) => {
    e.preventDefault();
    markAllTouched();

    if (!isValid) return;

    try {
      setIsSubmitting(true);
      setServerError("");

      const res = await fetch("http://localhost:3000/api/payments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          cardNumber: form.cardNumber,
          cardHolder: form.cardHolder,
          expiry: form.expiry,
          cvv: form.cvv,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setServerError(data?.message || "Payment failed. Please try again.");
        return;
      }

      alert(`Payment Successful! Transaction: ${data.transactionId}`);
      clearCart();
      navigate("/order-success");
    } catch (err) {
        console.log(err);
      setServerError("Network error. Is the backend running on port 3000?");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handlePayment}
      style={{
        maxWidth: "400px",
        margin: "40px auto",
        padding: "30px",
        border: "1px solid #ccc",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>Payment Details</h2>

      {serverError && (
        <div style={{ color: "red", marginBottom: "10px", fontSize: "12px" }}>
          {serverError}
        </div>
      )}

      <input
        placeholder="Card Number"
        value={form.cardNumber}
        onChange={(e) => setField("cardNumber", e.target.value)}
        onBlur={() => setTouched((t) => ({ ...t, cardNumber: true }))}
        style={{ width: "100%", marginBottom: "6px" }}
        inputMode="numeric"
      />
      {touched.cardNumber && errors.cardNumber && (
        <div style={{ color: "red", marginBottom: "10px", fontSize: "12px" }}>
          {errors.cardNumber}
        </div>
      )}

      <input
        placeholder="Card Holder Name"
        value={form.cardHolder}
        onChange={(e) => setField("cardHolder", e.target.value)}
        onBlur={() => setTouched((t) => ({ ...t, cardHolder: true }))}
        style={{ width: "100%", marginBottom: "6px" }}
      />
      {touched.cardHolder && errors.cardHolder && (
        <div style={{ color: "red", marginBottom: "10px", fontSize: "12px" }}>
          {errors.cardHolder}
        </div>
      )}

      <div style={{ display: "flex", gap: "10px" }}>
        <div style={{ flex: 1 }}>
          <input
            placeholder="MM/YY"
            value={form.expiry}
            onChange={(e) => setField("expiry", e.target.value)}
            onBlur={() => setTouched((t) => ({ ...t, expiry: true }))}
            style={{ width: "100%", marginBottom: "6px" }}
          />
          {touched.expiry && errors.expiry && (
            <div style={{ color: "red", marginBottom: "10px", fontSize: "12px" }}>
              {errors.expiry}
            </div>
          )}
        </div>

        <div style={{ flex: 1 }}>
          <input
            placeholder="CVV"
            value={form.cvv}
            onChange={(e) => setField("cvv", e.target.value)}
            onBlur={() => setTouched((t) => ({ ...t, cvv: true }))}
            style={{ width: "100%", marginBottom: "6px" }}
            inputMode="numeric"
            type="password"
          />
          {touched.cvv && errors.cvv && (
            <div style={{ color: "red", marginBottom: "10px", fontSize: "12px" }}>
              {errors.cvv}
            </div>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={!isValid || isSubmitting}
        style={{
          marginTop: "12px",
          width: "100%",
          padding: "10px",
          background: !isValid || isSubmitting ? "#333" : "black",
          color: "white",
          opacity: !isValid || isSubmitting ? 0.6 : 1,
          cursor: !isValid || isSubmitting ? "not-allowed" : "pointer",
        }}
      >
        {isSubmitting ? "Processing..." : "Pay Now"}
      </button>
    </form>
  );
}

export default Payment;
