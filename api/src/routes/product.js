const server = require("express").Router();
const { Product, Category } = require("../db.js");

//Create new product ----> '/products'
server.post("/", (req, res, next) => {
  const { name, description, price, stock, img, id_category } = req.body;

  Product.create({ name, description, price, stock, img }).then((et) => {
    Product.findOne({ where: { id: et.id } })
      .then(function (prod) {
        Category.findAll({ where: { id: id_category } }).then(function (
          categories
        ) {
          // prod.addCategory(categories);
          categories.forEach((element) => {
            prod.addCategory(element["dataValues"]["id"]);
          });
        });
      })
      .then((product) => {
        res.json({ mensaje: "producto creado OK", data: product });
      })
      .catch((err) => {
        console.log(err);
        res.json({ mensaje: "Error al creat el producto", data: err });
      });
  });
});

// get an all products ----> '/products'
server.get("/", (req, res, next) => {
  Product.findAll()
    .then((products) => {
      res.send(products);
    })
    .catch(next);
});

//get an one product  -------> '/products/:id'
server.get('/:id', (req, res)=>{
  const { id } = req.params;

  return Product.findOne({ where: { id }})
                .then( product => {
                  res.status(200).json({
                    mensaje: "Se encontro el producto con exito", 
                    data: product
                  })
                })
                .catch( err =>{
                  res.status(400).json({
                    mensaje: "No se encontro el producto", 
                    data: err
                  })
                })
})

server.post("/:idProd/category/:idCateg", (req, res, next) => {
  Product.findByPk(req.params.idProd)
    .then((product) => product.addCategory(req.params.idCateg))
    .then((success) => res.sendStatus(201)); // sequelize crea un metodo add para las relaciones n:n, ergo, tambien esta el metodo addProduct en la tabla Category
}); // carga categoria a los productos

//Modify an especific product ---> '/products/:id'
server.put("/:id", (req, res) => {
  //sacamos el id del producto que queremos modificar
  const { id } = req.params;
  //del body sacamos los datos que queremos modificar
  const { name, description, price, stock, img } = req.body;

  return Product.findOne({ where: { id } })
    .then((product) => {
      //pisamos las propiedades del producto que encontramos
      product.name = name;
      product.description = description;
      product.price = price;
      product.stock = stock;
      product.img = img;
      product.save();
      res.status(200).json({ mensaje: "Se modifico con exito", data: product });
    })
    .catch((err) => {
      res
        .status(400)
        .json({ mensaje: "Los campos enviados no son correctos", data: err });
    });
});

//Delete an especific product -----> '/products/:id'
server.delete("/:id", (req, res) => {
  const { id } = req.params;

  return Product.findOne({ where: { id } })
    .then((deleteProduct) => {
      deleteProduct.destroy();
      res.status(200).json({
        mensaje: "El producto fue eliminado correctamente",
        data: deleteProduct,
      });
    })
    .catch((err) => {
      res
        .status(400)
        .json({ mensaje: "No se pudo eliminar el producto", data: err });
    });
});

server.get("/search", (req, res) => {
  Product.findAll({
    where: {
      productName: req.query.query,
    },
  });
});

module.exports = server;
