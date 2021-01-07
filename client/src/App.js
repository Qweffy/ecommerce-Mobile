import React, { useState, useRef,useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CreateCategory from "./Components/CRUDcategory/CreateCategory.jsx";
import Productos from "./Components/Productos/Productos";
import Producto from "./Components/Producto/Producto.jsx";
import CreateProduct from "./Components/CRUDproduct/CreateProduct.jsx";
import Catalogue from "./Components/Catalogue/Catalogue.jsx";
import Categorys from "./Components/Categorys/Categorys";
import Cart from "./Components/cart/cart.jsx";
import CreateUser from "./Components/CRUDuser/CreateUser.jsx";
import Orders from "./Components/Orders/Orders.jsx";
import Order from "./Components/Order/Order.jsx";
import userLIST from "./Components/USERlist/userLIST";
import CreateSugestion from "./Components/CRUDsugestion/CreateSugestion.jsx";
import LandingPage from "./Components/LandingPage/LandingPage.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Sugestions from "./Components/LandingPage/Sugestions.jsx";
import cartInvite from "./Components/cart/cartInvite.jsx";
import actions from "./store/Actions/authactions";
import { Provider, useDispatch } from "react-redux";
import jwt from "jsonwebtoken";
import SignUp from "./Components/Login/SignUp.js";
import SignIn from "./Components/Login/SignIn.js";
import Me from "./Components/Login/App.js";
import CreateReview from "./Components/CRUDreview/CreateReview.jsx";
import ProductDetails from "./Components/ProductDetails/ProductDetails.js";
function App() {
  
  const dispatch = useDispatch()
  useEffect(() => {
    const token = window.localStorage.getItem("token")
    if (token) {
      const user = jwt.decode(token)
      dispatch(actions.setUser(user))
    }
  },[])
  return (
    <Router>
      <Route path="/" component={Navbar} />
      <Route path="/login" component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/me" component={Me} />
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/showProducts" component={Productos} />
      <Route exact path="/showCategories" component={Categorys} />
      <Route exact path="/createproduct" component={CreateProduct} />
      <Route exact path="/createcategory" component={CreateCategory} />
      <Route exact path="/createuser" component={CreateUser} />
      <Route exact path="/userlist" component={userLIST} />
      <Route exact path="/catalogue" component={Catalogue} />
      <Route exact path="/catalogue/:search" component={Catalogue} />
      <Route exact path="/products/:id" component={Producto} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/cartinvite" component={cartInvite} />
      <Route exact path="/orders" component={Orders} />
      <Route exact path="/orders/:id" component={Order} />
      <Route exact path="/createsugestion" component={CreateSugestion} />
      <Route exact path="/prueba" component={Sugestions} />
      <Route exact path="/createreview" component={CreateReview} />
    </Router>
  );
}

export default App;
