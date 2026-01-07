const express = require("express");
const router = express.Router();

const {
  getProducts,
  getTrending,
  getNewArrivals
} = require("../controllers/product.controller");

router.get("/", getProducts);
router.get("/trending", getTrending);
router.get("/new", getNewArrivals);

module.exports = router;
