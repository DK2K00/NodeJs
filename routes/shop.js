//Importing modules
const express = require("express");
const router = express.Router();
const shopController = require("../controllers/shop");
const path = require("path");

//Handling routes
router.get("/", shopController.getProducts);
router.get("/products", shopController.getProducts);
router.get("/cart", shopController.getCart);
router.get("/orders", shopController.getOrders);
router.get("/checkout", shopController.getCheckout);

module.exports = router;
