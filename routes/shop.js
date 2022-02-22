//Importing modules
const express = require("express");
const router = express.Router();
const rootDir = require("../util/path");
const path = require("path");
const adminData = require("./admin");

//Handling routes
router.get("/", (req, res, next) => {
  const products = adminData.products;
  //Rendering HTML file using template engine
  res.render("shop", {
    prods: products,
    pageTitle: "Shop",
    path: "/",
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  });
});

module.exports = router;
