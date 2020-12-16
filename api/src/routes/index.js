const { Router } = require("express");
// import all routers;
const productRouter = require("./product.js");
const categoryRouter = require("./category.js");
<<<<<<< HEAD
const orderRouter = require("./order.js");
const userRouter = require("./user.js");
=======
const orderRouter = require('./order.js');
const userRouter = require('./user.js')
>>>>>>> 72aed061e22325047a7ba47836b93bfc882cfc54

const router = Router();

// load each router on a route
// i.e: router.use('/auth', authRouter);
// router.use('/auth', authRouter);
router.use("/orders", orderRouter);
router.use("/products", productRouter);
router.use("/category", categoryRouter);
<<<<<<< HEAD
router.use("/user", userRouter);
=======
router.use("/users", userRouter);
>>>>>>> 72aed061e22325047a7ba47836b93bfc882cfc54

module.exports = router;
