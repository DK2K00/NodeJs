//Importing modules
const express = require("express");
const router = express.Router();
const shopController = require("../controllers/shop");
const path = require("path");

//Handling routes
router.get("/", shopController.getProducts);
router.get("/products", shopController.getProducts);
router.get("/products/:productId", shopController.getProduct);
router.get("/cart", shopController.getCart);
router.post("/cart", shopController.postCart);
router.post("/cart-delete-item", shopController.postCartDeleteProduct);
router.get("/orders", shopController.getOrders);
router.get("/checkout", shopController.getCheckout);

module.exports = router;
