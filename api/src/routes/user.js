const server = require("express").Router();
const { User } = require("../db.js");
// const { Op } = require("sequelize");

server.post("/create", (req, res) => {
  const { name, lastname, mail, password } = req.body;
  console.log(name, lastname, mail, password);
  User.create({ name, lastname, mail, password })
    .then((data) => {
      res.status(201).json({
        mensaje: "USER OK",
        data: data,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({
        mensaje: "USER NOT OK",
        data: err,
      });
    });
});

server.get("/all", (req, res) => {
  User.findAll()
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      res.status(400).json({
        mensaje: "No hay usuarios",
        data: err,
      });
    });
});

server.put("/modify/:id", (req, res) => {
  const { id } = req.params;
  User.update(req.body, {
    //depende lo que le pasen desde el front modifica un valor o todos
    where: { id },
  })
    .then((data) => {
      res.status(201).json({
        mensaje: "USER MODIFY OK",
        data: data,
      });
    })
    .catch((err) => {
      res.status(400).json({
        mensaje: "MODIFY NOT OK",
        data: err,
      });
    });
});

server.delete("/delete/:id", (req, res) => {
  const { id } = req.params;

  return User.findOne({ where: { id } })
    .then((deleteProduct) => {
      deleteProduct.destroy();
      res.status(200).json({
        mensaje: "USER DELETED OK",
        data: deleteProduct,
      });
    })
    .catch((err) => {
      res.status(400).json({ mensaje: "IMPOSIBLE DELETE USER", data: err });
    });
});

server.get("/:id/orders", (req, res) => {
  let { id } = req.params;

  // Find user WHERE id: id, JOIN Order ON user.id = order.user_id
  User.findOne({
    where: { id },
    include: {
      model: Order,
    },
  })
    .then((userOrders) => {
      res.json({
        message: "Peticion exitosa",
        data: userOrders,
      });
    })
    .catch((err) => {
      res.json({
        messaje: "Error",
        data: err,
      });
    });
});

module.exports = server;
