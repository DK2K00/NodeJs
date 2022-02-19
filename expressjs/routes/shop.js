//Importing modules
const express = require("express");
const router = express.Router();
const rootDir = require('../util/path');
const path = require("path");

//Handling routes
router.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
