const server = require('express').Router();
const { Product } = require('../db.js');

server.get('/', (req, res, next) => {
	Product.findAll()
		.then(products => {
			res.send(products);
		})
		.catch(next);
});


server.post('/', (req, res, next) => {

  const { name, description, price, stock, img } = req.body
  console.log(req.body)
  return Product.create({name, description, price, stock, img})
                .then(product =>{
                  res.json({mensaje: 'producto creado OK', data: product})
                })
                .catch( err => {
                  res.json({mensaje: 'Error al creat el producto', data: err})
                })
/* 	Product.create({
      name: req.body.name,
      description: req.body.description,
			price: req.body.price,
			stock: req.body.stock,
			img: req.body.img
    }).then(data => {
     	res.send(data);
		})
		.catch(next); */
});


module.exports = server;