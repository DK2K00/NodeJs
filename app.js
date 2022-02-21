//Importing modules
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");

//Importing routes from different folders
const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

//Parsing request
app.use(bodyParser.urlencoded({ extended: false }));
//Using static pages
app.use(express.static(path.join(__dirname, "public")));

//Handling route requests
app.use("/admin", adminData.routes);
app.use(shopRoutes);

//404 page
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

//Creating a server port
app.listen(3000);