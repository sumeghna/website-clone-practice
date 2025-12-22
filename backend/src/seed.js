const mongoose = require("mongoose");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config({ path: path.resolve(__dirname, "../.env") });

const Product = require("./models/product.model");
const products = require("./data/products");

const seedProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    await Product.deleteMany();
    await Product.insertMany(products);

    console.log("Products seeded successfully");
    process.exit();
  } catch (error) {
    console.error("Seeding failed", error);
    process.exit(1);
  }
};

seedProducts();
