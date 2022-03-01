//Importing modules
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const db = require('./util/database');

//Importing routes from different folders
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const errorController = require('./controllers/error');
    
//Setting view engine for templates
app.set("view engine", "ejs");
//Setting default folder to find template files
app.set("views", "views");

//Parsing request
app.use(bodyParser.urlencoded({ extended: false }));
//Using static pages
app.use(express.static(path.join(__dirname, "public")));

//Handling route requests
app.use("/admin", adminRoutes);
app.use(shopRoutes);

//404 page
app.use(errorController.get404);

//Creating a server port
app.listen(3000);
