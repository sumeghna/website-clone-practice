import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // 🚨 REQUIRED

    console.log("REGISTER CLICKED", form); // DEBUG LINE

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        form
      );

      alert("Registered successfully");
      console.log(res.data);
    } catch (err) {
      console.error(err);
      alert("Register failed");
    }
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>

      <form onSubmit={handleSubmit} className="auth-form">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />

        <button
  type="button"
  onClick={() => alert("BUTTON CLICKED")}
>
  Submit
</button>

      </form>
    </div>
  );
};

export default Register;
