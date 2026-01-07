const express = require("express");
const path = require("path");

const productRoutes = require("./routes/product.routes");
const uploadRoutes = require("./routes/upload.routes");
const homeRoutes = require("./routes/home.routes");

const app = express();

// Parse JSON
app.use(express.json());

// Serve uploads folder PUBLICLY
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

// Routes
app.use("/api/products", productRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/home", homeRoutes);

// Health check
app.get("/", (req, res) => {
  res.send("API running");
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ success: false, message: err.message });
});

module.exports = app;
