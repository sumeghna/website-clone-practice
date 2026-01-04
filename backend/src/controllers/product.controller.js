const Product = require("../models/product.model");

// Get ALL products (optional filter)
exports.getProducts = async (req, res) => {
  try {
    const filter = {};

    if (req.query.category) {
      filter.category = req.query.category;
    }

    const products = await Product.find(filter);
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Trending
exports.getTrending = async (req, res) => {
  try {
    const products = await Product.find({ isTrending: true });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// New arrivals
exports.getNewArrivals = async (req, res) => {
  try {
    const products = await Product.find({ isNewArrival: true });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
