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
	Product.create({
      name: req.body.name,
      description: req.body.description,
			price: req.body.price,
			stock: req.body.stock,
			img: req.body.img
    }).then(data => {
     	res.send(data);
		})
		.catch(next);
});


module.exports = server;
