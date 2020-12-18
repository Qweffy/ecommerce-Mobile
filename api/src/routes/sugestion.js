const server = require("express").Router();
const { Sugestion } = require("../db.js");

server.get("/", (req, res, next) => {
  Sugestion.findAll()
    .then((sugestion) => {
      res.send(sugestion);
    })
    .catch(next);
});

server.post("/", (req, res, next) => {
    Sugestion.create({
    name: req.body.name,
  })
    .then((sugestion) => {
      res.json({ mensaje: "categoria creada OK", data: sugestion });
    })
    .catch(next);
});

module.exports = server;