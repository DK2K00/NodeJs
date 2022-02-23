//Importing modules
const express = require("express");
const router = express.Router();
const productsController = require('../controllers/products');
const path = require("path");
const adminData = require("./admin");

//Handling routes
router.get("/", productsController.getProducts);

module.exports = router;
