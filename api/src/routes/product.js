const server = require("express").Router();
const { Product } = require("../db.js");

server.get("/", (req, res, next) => {
  Product.findAll()
    .then((products) => {
      res.send(products);
    })
    .catch(next);
});

server.get("/search", (req, res) => {
  Post.findAll({
    where: {
      productName: req.query.query,
    },
  });
});

module.exports = server;
