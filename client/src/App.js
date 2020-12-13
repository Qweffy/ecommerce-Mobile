import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CreateCategory from "./Components/CRUDcategory/CreateCategory.jsx";
import Productos from "./Components/Productos/Productos";
import Producto from "./Components/Producto/Producto.jsx";
import CreateProduct from "./Components/CRUDproduct/CreateProduct.jsx";
import Catalogue from "./Components/Catalogue/Catalogue.jsx";
import Categorys from "./Components/Categorys/Categorys";
import NavBar from "./Components/Navbar/Navbar";

function App() {
  return (
    <Router >
      <Route path='/' component={NavBar} />
      <Route exact path='/showProducts' component={Productos} />
      <Route exact path='/showCategories' component={Categorys} />
      <Route exact path="/createproduct" component={CreateProduct} />
      <Route exact path="/createcategory" component={CreateCategory} />
      <Route exact path="/catalogue" component={Catalogue} />
      <Route exact path='/products/:id' component={Producto} />
    </Router>
  );
}

export default App;
