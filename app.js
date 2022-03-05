//Importing modules
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const db = require("./util/database");
const sequelize = require("./util/database");
const Product = require("./models/product");
const User = require("./models/user");
const Cart = require("./models/cart");
const CartItem = require("./models/cart-item");

//Importing routes from different folders
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const errorController = require("./controllers/error");

//Setting view engine for templates
app.set("view engine", "ejs");
//Setting default folder to find template files
app.set("views", "views");

//Parsing request
app.use(bodyParser.urlencoded({ extended: false }));
//Using static pages
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  User.findById(1)
    .then((user) => {
      req.user = user;
      next();
    })
    .catch((err) => console.log(err));
});

//Handling route requests
app.use("/admin", adminRoutes);
app.use(shopRoutes);

//404 page
app.use(errorController.get404);

Product.belongsTo(User, { constraints: true, onDelete: "CASCADE" });
User.hasMany(Product);
User.hasOne(Cart);
Cart.belongsTo(User);
Cart.belongsToMany(Product, { through: CartItem });
Product.belongsToMany(Cart, { through: CartItem });

sequelize
  .sync({ force: true })
  // .sync()
  .then((result) => {
    return User.findById(1);
    // console.log(result);
  })
  .then((user) => {
    if (!user) {
      return User.create({ name: "Max", email: "test@test.com" });
    }
    return user;
  })
  .then((user) => {
    // console.log(user);
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
