const fs = require("fs");
const path = require("path");

//Path to store data in Data folder
const p = path.join(
  path.dirname(require.main.filename),
  "data",
  "products.json"
);

//Getting products from storage
const getProductsFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

//Creating a new product
module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  //Storing new product
  save() {
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};
