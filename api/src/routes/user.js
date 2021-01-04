const server = require("express").Router();
const { User } = require("../db.js");
// const { Op } = require("sequelize");

server.post("/create", (req, res) => {
  const { name, lastname, mail, password } = req.body;
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
    .then((users) => {
      res.send(users);
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
  //del body sacamos los datos que queremos modificar
  const { name, lastname, mail } = req.body;

  return User.findOne({ where: { id } })
    .then((product) => {
      //pisamos las propiedades del producto que encontramos
      product.name = name;
      product.lastname = lastname;
      product.mail = mail;
      product.save();
      res.status(200).json({ mensaje: "Se modifico con exito", data: product });
    })
    .catch((err) => {
      res
        .status(400)
        .json({ mensaje: "Los campos enviados no son correctos", data: err });
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
