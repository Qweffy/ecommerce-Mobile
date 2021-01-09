import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CreateCategory from "./Components/CRUDcategory/CreateCategory.jsx";
import Productos from "./Components/Productos/Productos";
import Producto from "./Components/Producto/Producto.jsx";
import CreateProduct from "./Components/CRUDproduct/CreateProduct.jsx";
import Catalogue from "./Components/Catalogue/Catalogue.jsx";
import Categorys from "./Components/Categorys/Categorys";
import Combinedcart from "./Components/cart/combinedcart.jsx";
import CreateUser from "./Components/CRUDuser/CreateUser.jsx";
import Orders from "./Components/Orders/Orders.jsx";
import Order from "./Components/Order/Order.jsx";
import userLIST from "./Components/USERlist/userLIST";
import CreateSugestion from "./Components/CRUDsugestion/CreateSugestion.jsx";
import LandingPage from "./Components/LandingPage/LandingPage.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Sugestions from "./Components/LandingPage/Sugestions.jsx";
import CreateReview from "./Components/CRUDreview/CreateReview.jsx";
import Test from "./Components/test.jsx";
/* Proteccion de rutas */
import RoutAdmin from "./Components/RoutAuth/RoutAdmin.jsx";
import RoutClient from "./Components/RoutAuth/RoutClient.jsx";

import actions from "./store/Actions/authactions";
import { useDispatch } from "react-redux";
import jwt from "jsonwebtoken";
import SignUp from "./Components/Login/SignUp.js";
import SignIn from "./Components/Login/SignIn.js";
import Me from "./Components/Login/Me.js";
function App() {

  const dispatch = useDispatch()

  const token = window.localStorage.getItem("token")
  if (token) {
    const user = jwt.decode(token)
    dispatch(actions.setUser(user))
  }

  return (
    <Router>
      {/* Rutas publicas */}
      <Route path="/" component={Navbar} />
      <Route exact path="/test" component={Test} />
      <Route exact path="/login" component={SignIn} />
      <Route exact path="/register" component={SignUp} />
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/catalogue" component={Catalogue} />
      <Route exact path="/catalogue/:search" component={Catalogue} />
      <Route exact path="/products/:id" component={Producto} />
      <Route exact path="/cart" component={Combinedcart} />
      <Route exact path="/prueba" component={Sugestions} />

      {/* Rutas del cliente */}
      <Route exact path="/me" component={ props => <RoutClient { ...props } Component={Me} />}/>
      <Route exact path="/createreview" component={ props => <RoutClient { ...props } Component={CreateReview} />} />

      {/* Rutas del Admin */}
      <Route exact path="/showProducts" component={ props => <RoutAdmin { ...props } Component={Productos} />} />
      <Route exact path="/createproduct" component={ props => <RoutAdmin { ...props } Component={CreateProduct} />} />
      <Route exact path="/showCategories" component={ props => <RoutAdmin { ...props } Component={Categorys} />} />
      <Route exact path="/createcategory" component={ props => <RoutAdmin { ...props } Component={CreateCategory} />} />
      <Route exact path="/userlist" component={ props => <RoutAdmin { ...props } Component={userLIST} />} />
      <Route exact path="/createuser" component={ props => <RoutAdmin { ...props } Component={CreateUser} />}/>{/* Pendiente preguntar */}
      <Route exact path="/orders" component={ props => <RoutAdmin { ...props } Component={Orders} />} />
      <Route exact path="/orders/:id" component={ props => <RoutAdmin { ...props } Component={Order} />}  />
      <Route exact path="/createsugestion" component={ props => <RoutAdmin { ...props } Component={CreateSugestion} />} />
      <Route exact path="/signin" component={ props => <RoutAdmin { ...props } Component={SignIn} />} />

    </Router>
  );
}

export default App;
