const express = require("express");
const productRoutes = require("./routes/product.routes");

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use("/api/products", productRoutes);

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: "Server Error" });
});

module.exports = app;
