const server = require("express").Router();
const { Order, User, Product } = require('../db.js');
const { Sequelize } = require('sequelize');

server.get('/cart/:id' , (req, res) =>{    
  //ruta para encontrar la orden carrito y devolver el id de la orden
  
  const { id } = req.params;
  Order.findOne( {
    where:{ state:'cart', userId: id },
    include:[{ model: Product}]
  })
  .then( order => {
    res.status(200).json({
      mensaje: "Se encontro el carrito",
      data: order,
    });
  })
  .catch((err) => {
      res.status(400).json({
        mensaje: "No se encontro el carrito",
        data: err,
      });
    });
});


server.post('/cart', (req, res, next) => {  //ruta para agregar elementos a la orden carrito y sumar con contador
  const { id } = req.body
  Order.findAll({                         //cuando entra aca busca si ya existe una orden carrito
    where: {
      state: 'cart',
      userId: id
    }
  }).then(order => {
    if (order[0])     //si existe entonces devuelve el id de la orden
    { res.status(200).json(order[0].dataValues.id) }
    else {   //sino existe crea una nueva con el state en cart y devuelve el id de la orden creada
      Order.create({
        state: 'cart',
        price: 0,
        userId: id
      }).then(algo => {
        Order.findByPk(algo.dataValues.id).then(order => order.setUser(id))
          .then(success => res.status(200).json(algo.dataValues.id))
      });
    }
  }).catch((err) => {
    console.log(err);
    /* res.status(400).json({
      mensaje: "No se encontro el carrito",
      data: err,
    }); */
  });
});

server.post('/cart/:orderid', (req, res, next) => {  
  //con el id de la orden creada y el id del producto se hace el addProduct a la tabla intermedia
  var orderPromisse = Order.findByPk(req.params.orderid);
  var productInit = Product.findByPk(req.body.idproduct);
  var produtOrder = Product.findOne({ where: {id: req.body.idproduct}, include:{ where: {id: req.params.orderid}, model: Order}});

  //esta funcion se fija si existe ya un producto igual en esa orden   
  Promise.all([orderPromisse, productInit, produtOrder ])
          .then(data =>{
            data[0].hasProduct(req.body.idproduct)
                .then(exist => {
                  if (exist) { //si existe suma el contador en 1
                    // con sequelize literal puedo hacer la suma del contador
                    var newCount = data[2].orders[0].order_line.count + 1;
                    var newPrice = data[2].price * newCount;
                    data[0].addProduct(req.body.idproduct, {through: {price:newPrice, count: newCount}})
                          .then(resp =>{
                            res.send(resp);
                          })                        
                  }
                  else {  //si no existe agrega el producto
                    data[0].addProduct(req.body.idproduct, { through: { price: data[1].price}})
                        .then(success => res.sendStatus(201))
                        .catch(err=>{
                          console.log(err)
                        });
                  }
                })               
          })
          .catch(err=>{
            console.log(err)
          });
});

server.get('/', (req, res) => {
  let state = req.query.status;
  let order;

  // Find order WHERE state: state, JOIN User ON order.user_id = user.id
  // We get array with object with a key 'user'. typeof user ==== 'object'
  if (state) {
    order = Order.findAll({
      where: {
        state
      },
      include: {
        model: User
      }
    })
  }
  else {
    order = Order.findAll({
      include: {
        model: User
      }
    });
  }
  order.then(orders => {
    res.send(orders);
  })
})

server.delete("/cart/:orderid/:productid",(req ,res, next) =>{  //borra un producto especifico del carrito
  Order.findByPk(req.params.orderid)
        .then(order => {
          order.removeProduct(req.params.productid)
                .then(()=>{
                  Order.findOne({
                    where: {id: req.params.orderid},
                    include: {model: Product}
                  })
                    .then(order=>{
                      res.status(200).json({
                        message: 'Se borro el producto del carrito',
                        order
                      })
                    })
                })
        });
});

//Obtiene una orden especifica.
server.get("/:id", (req, res, next) => {
  let id = req.params.id;
  Order.findOne({
    where: { id },
    include: {
      model: Product
    }
  }
  ).then((order) => res.json({ mensaje: "Successfully", data: order }))
    .catch(err => {
      res.status(400).json({ mensaje: "order not found" });
    })
})

//Modifica una orden especifica.
server.put("/:id", (req, res, next) => {
  const { id } = req.params;
  const { price, state } = req.body;

  Order.findOne({
    where: { id: id }
  }).then(order => {
    order.price = price;
    order.state = state;
    order.save();
    res.json({ mensaje: "Successfully modified order", data: order })
  })
    .catch(err => {
      res.status(400).json({ mensaje: "Successfully modified order" })
    })
})

module.exports = server;
