const Product = require("../models/product.model");

exports.getHomeData = async (req, res) => {
  try {
    const featured = await Product.find({ isFeatured: true }).limit(8);
    const trending = await Product.find().sort({ createdAt: -1 }).limit(8);

    res.json({
      success: true,
      featured,
      trending
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
