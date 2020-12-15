const server = require("./order");


const { Order, User } = require('../db.js');

server.get('/:id/orders', (req, res) => {
    let { id } = req.params;

    // Find user WHERE id: id, JOIN Order ON user.id = order.user_id
    User.findOne({
        where: { id },
        include: {
            model: Order
        }
    })
    .then(userOrders => {
        res.json({
            message: "Peticion exitosa",
            data: userOrders
        });
    })
    .catch(err => {
        res.json({
            messaje: "Error",
            data: err
        })
    })   
});

module.exports = server;