const server = require("express").Router();
const { Product, Category, Review } = require("../db.js");
const { Op } = require("sequelize");

//Create new product ----> '/products'

server.post("/", (req, res, next) => {
  Product.create({
    name: req.body.name,
    processor: req.body.processor,
    screen: req.body.screen,
    ram: req.body.ram,
    storage: req.body.storage,
    camara: req.body.description,
    frontcamara: req.body.frontcamara,
    battery: req.body.battery,
    dimensions: req.body.dimensions,
    others: req.body.others,
    price: req.body.price,
    stock: req.body.stock,
    img: req.body.img,
    colors: req.body.colors,
  })
    .then((algo) => {
      res.send(algo);
    })
    .catch(next);
});

server.post("/:idProd/category/:idCateg", (req, res, next) => {
  // agrega categoria al producto
  Product.findByPk(req.params.idProd)
    .then((product) => product.addCategory(req.params.idCateg))
    .then((success) => res.sendStatus(201)); // sequelize crea un metodo add para las relaciones n:n, ergo, tambien esta el metodo addProduct en la tabla Category
});

server.post("/:idProd/sugestion/:idCateg", (req, res, next) => {
  // agrega sugestion al producto
  Product.findByPk(req.params.idProd)
    .then((product) => product.addSugestion(req.params.idCateg))
    .then((success) => res.sendStatus(201)); // sequelize crea un metodo add para las relaciones n:n, ergo, tambien esta el metodo addProduct en la tabla Category
});

// get an all products ----> '/products'
server.get("/", (req, res, next) => {
  let categories = req.query.categories;
  let q;
  if (typeof categories === "undefined" || categories === []) {
    q = Product.findAll();
  } else {
    q = Product.findAll({
      include: {
        model: Category,
        required: true,
        where: {
          name: req.query.categories,
        },
      },
    });
  }
  q.then((products) => {
    res.send(products);
  }).catch(next);
});

server.post("/sugestions", (req, res) => {
  //esta ruta filtra los productos por las sugestions
  const { sugestion } = req.body;

  Product.findAll().then((products) => {
    let productosfiltrados = [];
    products.map((product, index) => {
      product.hasSugestions(sugestion).then(
        //pergunta si tiene por lo menos esas categorias(sugestions)
        (exist) => {
          if (exist)
            //si las tiene , agrega el producto al arreglo
            productosfiltrados.push(product);
          if (index == products.length - 1) res.send(productosfiltrados);
        }
      );
    });
  });
});

server.get("/search/:query", (req, res) => {
  Product.findAll({
    where: {
      [Op.or]: [
        { name: { [Op.like]: `%${req.params.query}%` } },
        { description: { [Op.like]: `%${req.params.query}%` } },
      ],
    },
  }).then((data) => {
    res.json(data);
  });
});

//get an one product  -------> '/products/:id'
server.get("/:id", (req, res) => {
  const { id } = req.params;

  return Product.findOne({ where: { id } })
    .then((product) => {
      res.status(200).json({
        mensaje: "Se encontro el producto con exito",
        data: product,
      });
    })
    .catch((err) => {
      res.status(400).json({
        mensaje: "No se encontro el producto",
        data: err,
      });
    });
});

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

// Add review
server.post("/:id/reviews", (req, res) => {
  let productId = req.params.id;
  let {rating, description, userId} = req.body;

  Review.create({
    productId,
    userId,
    rating,
    description
  })
  .then(review => {
    res.json({message: "Review created", data: review});
  })
  .catch(err => {
    res.status(400).json({ message: "Couldn't create review", data: err });
  });
})

//Modify review
server.put("/:id/reviews/:idReview", (req, res) => {
  let reviewId = req.params.idReview;
  let { rating, description } = req.body;

  Review.findOne({
    where: {
      id: reviewId
    }
  })
  .then(review => {
    review.rating = rating;
    review.description = description;
    review.save();
    res.status(200).json({ message: "Review modified", data: review });
  })
  .catch(err => {
    res.status(400).json({ message: "Couldn't modify review", data: err });
  });
})

//Delete review
server.delete("/:id/reviews/:idReview", (req, res, next) => {
  const reviewId = req.params.idReview;

  Review.findOne({
    where: {id: reviewId}
  })
  .then(review => {
    review.destroy();
    res.status(200).json({ message: "Review deleted", data: review })
  })
  .catch(err => {
    res.status(400).json({ message: "Couldn't delete review", data: err });
  });
})

// Get all product reviews
server.get("/:id/reviews", (req, res, next) => {
  let productId = req.params.id;

  Review.findAll({
    where: { productId }
  })
  .then(reviews => {
    res.json({ message: "All reviews obtained", data: reviews });
  })
  .catch(err => {
    res.status(400).json({ message: "Couldn't get reviews", data: err });
  });
})

module.exports = server;
