const server = require("express").Router();
const { Order } = require('../db.js');
const { Sequelize } = require('sequelize');

server.post('/', (req, res, next) => {
console.log(req.body);
Order.findAll({                         //cuando entra aca busca si ya existe una orden carrito
  where : {
    state:'cart'
  }
}).then(encontrados => {
if(encontrados[0])     //si existe entonces devuelve el id de la orden
{res.status(200).json(encontrados[0].dataValues.id)}
else {   //sino existe crea una nueva con el state en cart y devuelve el id de la orden creada
  Order.create({
      state: 'cart',
      price: 0
    }).then(algo => {
      Order.findByPk(algo.dataValues.id).then(order => order.setUser(req.body.id))
      .then(success => res.status(200).json(algo.dataValues.id))
  });
}
});
});

server.post('/:orderid', (req, res, next) => {  //con el id de la orden creada y el id del producto se hace el addProduct a la tabla intermedia

  //esta funcion se fija si existe ya un producto igual en esa orden
  Order.findByPk(req.params.orderid).then(orderr => orderr.hasProduct(req.body.idproduct)).then(exist => {
  if(exist){ //si existe suma el contador en 1
 // con sequelize literal puedo hacer la suma del contador
    Order.findByPk(req.params.orderid).then(order => order.addProduct(req.body.idproduct,{ through: { count: Sequelize.literal('count + 1') } })).then(success => res.sendStatus(201));
  }
  else{  //si no existe agrega el producto
    Order.findByPk(req.params.orderid).then(order => order.addProduct(req.body.idproduct)).then(success => res.sendStatus(201));
  }

  });


});

module.exports = server;
