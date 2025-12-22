const path = require("path");
const dotenv = require("dotenv");

// Load .env from backend folder
dotenv.config({ path: path.resolve(__dirname, "../.env") });

const connectDB = require("./config/db");
const app = require("./app");

connectDB();

require("./models/product.model");
console.log("Product model loaded");

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
