const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  images: [{ type: String }],   // URL strings (OK for now)
  isFeatured: { type: Boolean, default: false },
  rating: { type: Number, default: 4.5 },
}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema);
