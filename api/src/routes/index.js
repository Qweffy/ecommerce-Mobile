const { Router } = require("express");
// import all routers;
const productRouter = require("./product.js");
const categoryRouter = require("./category.js");
const orderRouter = require('./order.js');
const userRouter = require('./user.js')

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
>>>>>>> 38f7766c44cadbade12b8aecefe002750de7cc9d

module.exports = router;
