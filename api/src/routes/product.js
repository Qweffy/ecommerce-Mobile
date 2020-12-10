const server = require("express").Router();
const { Product } = require("../db.js");

//Create new product ----> '/products'
server.post('/', (req, res, next) => {

  const { name, description, price, stock, img } = req.body
  
  return Product.create({name, description, price, stock, img})
                .then(product =>{
                  res.json({mensaje: 'producto creado OK', data: product})
                })
                .catch( err => {
                  res.json({mensaje: 'Error al creat el producto', data: err})
                })
  });
  
// get an all products ----> '/products'
server.get("/", (req, res, next) => {
  Product.findAll()
    .then((products) => {
      res.send(products);
    })
    .catch(next);
});

//Modify an especific product ---> '/products/:id'
server.put('/:id', (req, res)=>{
  //sacamos el id del producto que queremos modificar
  const { id } = req.params;
  //del body sacamos los datos que queremos modificar 
  const { name, description, price, stock, img } = req.body

  return Product.findOne({ where: { id }})
                .then( product => { //pisamos las propiedades del producto que encontramos
                  product.name = name;
                  product.description = description;
                  product.price = price;
                  product.stock = stock;
                  product.img = img;
                  product.save();
                  res.status(200).json({mensaje: 'Se modifivo con exito', data: product})
                })
                .catch( err => {
                  res.status(400).json({mensaje: 'Los campos enviados no son correctos', data: err})
                })
} )

//Delete an especific product -----> '/products/:id'
server.delete('/:id', ( req, res )=>{
  const { id } = req.params;

  return Product.findOne({ where: { id }})
                .then(deleteProduct => {
                  deleteProduct.destroy();
                  res.status(200).json({mensaje: 'El producto fue eliminado correctamente', data: deleteProduct});
                })
                .catch(err => {
                  res.status(400).json({mensaje: 'No se pudo eliminar el producto', data: err});
                })
})

server.get("/search", (req, res) => {
  Product.findAll({
    where: {
      productName: req.query.query,
    },
  });
});


module.exports = server;
