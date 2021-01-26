const server = require("express").Router();
const { Order, User, Product } = require('../db.js');
const { Sequelize } = require('sequelize');

server.put('/:userId/cart', (req, res)=>{
  const { userId } = req.params;
  const { id, acum } = req.body;

  Promise.all([Product.findOne({ where: { id }}), Order.findOne({ where: {userId}})])
          .then( data => {
              var total = data[0].price * acum; 
              console.log(total)
              data[0].setOrders(data[1], { through: { price: total, count: acum }})
              .then(()=>{
                Order.findOne({ 
                  where:{ state:'cart', userId },
                  include: [{model: Product}]
                })
                .then(order => {
                  var newTotal = []
                  order.products.map(product => {
                    newTotal.push(product.order_line.price)
                  })
                  var suma = newTotal.reduce((add, value)=> add + value)
                  order.price = suma;
                  order.save();
                  res.status(202).json({
                    messaje: 'Orden actualizada',
                    order
                  });
                })
              })
          })
})

server.post('/:userId/cart/:userOrden', (req, res)=>{
  const { userOrden } = req.params;
  const { id, acum } = req.body;

  Promise.all([Product.findOne({ where: { id }}), Order.findOne({ where: {id : userOrden}})])
          .then( data => {
              var total = data[0].price * acum; 
              data[1].addProducts([data[0]], { through: { price: total, count: acum }})
              .then(()=>{
                Order.findOne({ 
                  where:{ id : userOrden },
                  include: [{model: Product}]
                })
                .then(order => {
                  var newTotal = []
                  order.products.map(product => {
                    newTotal.push(product.order_line.price)
                  })
                  var suma = newTotal.reduce((add, value)=> add + value)
                  order.price = suma;
                  order.save();
                  res.status(202).json({
                    messaje: 'Orden actualizada',
                    order
                  });
                })
              })
          })
})


module.exports = server;