const express = require("express");
const productRoutes = require("./routes/product.routes");
const path = require("path");

const app = express();

// Middleware to parse JSON
app.use(express.json());
app.use('/static', express.static(path.join(__dirname, 'assets')));
// Routes
app.use("/api/products", productRoutes);

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: "Server Error" });
});

module.exports = app;
