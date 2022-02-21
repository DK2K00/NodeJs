//Importing modules
const express = require("express");
const router = express.Router();
const rootDir = require('../util/path');
const path = require("path");
const adminData = require('./admin');

//Handling routes
router.get("/", (req, res, next) => {
  console.log(adminData.products);
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
