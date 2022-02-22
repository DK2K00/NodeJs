//Importing modules
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const expressHbs = require('express-handlebars');

//Importing routes from different folders
const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

//App engine is set due to handlebars being a 3rd party package
//not integrated into node
app.engine(
  'hbs',
  expressHbs({
    layoutsDir: 'views/layouts/',
    defaultLayout: 'main-layout',
    extname: 'hbs'
  })
);
//Setting view engine for templates
app.set("view engine", "hbs");
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
