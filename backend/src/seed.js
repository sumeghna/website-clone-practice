const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/product.model");
const products = require("./data/products");

dotenv.config();

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    await Product.deleteMany();
    await Product.insertMany(products);

    console.log("Database Seeded Successfully");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();
