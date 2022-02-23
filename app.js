//Importing modules
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");

//Importing routes from different folders
const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

//Setting view engine for templates
app.set("view engine", "ejs");
//Setting default folder to find template files
app.set("views", "views");

//Parsing request
app.use(bodyParser.urlencoded({ extended: false }));
//Using static pages
app.use(express.static(path.join(__dirname, "public")));

//Handling route requests
app.use("/admin", adminData.routes);
app.use(shopRoutes);

//404 page
app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});

//Creating a server port
app.listen(3000);
