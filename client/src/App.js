import React, { useState, useRef } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CreateCategory from "./Components/CRUDcategory/CreateCategory.jsx";
import Productos from "./Components/Productos/Productos";
import Producto from "./Components/Producto/Producto.jsx";
import CreateProduct from "./Components/CRUDproduct/CreateProduct.jsx";
import Catalogue from "./Components/Catalogue/Catalogue.jsx";
import Categorys from "./Components/Categorys/Categorys";
import Cart from "./Components/cart/Cart.jsx";
import Cart from "./Components/cart/cart.jsx";
import CreateUser from "./Components/CRUDuser/CreateUser.jsx";
import Orders from "./Components/Orders/Orders.jsx";
import Order from "./Components/Order/Order.jsx";
import CreateSugestion from "./Components/CRUDsugestion/CreateSugestion.jsx";
import LandingPage from "./Components/LandingPage/LandingPage.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Sugestions from "./Components/Sugestions/Sugestions.jsx";

function App() {
  return (
    <Router>
      <Route path="/" component={Navbar} />
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/showProducts" component={Productos} />
      <Route exact path="/showCategories" component={Categorys} />
      <Route exact path="/createproduct" component={CreateProduct} />
      <Route exact path="/createcategory" component={CreateCategory} />
      <Route exact path="/createuser" component={CreateUser} />
      <Route exact path="/catalogue" component={Catalogue} />
      <Route exact path="/catalogue/:search" component={Catalogue} />
      <Route exact path="/products/:id" component={Producto} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/orders" component={Orders} />
      <Route exact path="/orders/:id" component={Order} />
      <Route exact path="/createsugestion" component={CreateSugestion} />
      <Route exact path="/sugestions" component={Sugestions} />
    </Router>
  );
}

export default App;
