const server = require("express").Router();
const { Category } = require("../db.js");

server.get("/", (req, res, next) => {
  Category.findAll()
    .then((category) => {
      res.send(category);
    })
    .catch(next);
});

server.get("/search", (req, res) => {
  Category.findAll({
    where: {
      categoryName: req.query.query,
    },
  });
});

server.post("/", (req, res, next) => {
  Category.create({
    name: req.body.name,
  })
    .then((data) => {
      res.send(data);
    })
    .catch(next);
});

module.exports = server;
