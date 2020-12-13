import React, { useState, useRef } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CreateCategory from "./Components/CRUDcategory/CreateCategory.jsx";
import Productos from "./Components/Productos/Productos";
import Producto from "./Components/Producto/Producto.jsx";
import CreateProduct from "./Components/CRUDproduct/CreateProduct.jsx";
import Catalogue from "./Components/Catalogue/Catalogue.jsx";
import Categorys from "./Components/Categorys/Categorys";
import NavBar from "./Components/Navbar/Navbar";
import axios from "axios";
import { useParams } from "react-router-dom";

function App() {
  const [productsfilters, setProductsfilters] = useState([]);
  function onSearch(product) {
    axios
      .get("http://localhost:4000/products/search/" + product)
      .then((res) => {
        return res.data;
      })
      .then((productsfilters) => {
        setProductsfilters(productsfilters);
      });
  }

  return (
    <Router>
      <Route path="/" render={() => <NavBar onSearch={onSearch} />} />
      <Route exact path="/showProducts" component={Productos} />
      <Route exact path="/showCategories" component={Categorys} />
      <Route exact path="/createproduct" component={CreateProduct} />
      <Route exact path="/createcategory" component={CreateCategory} />
      <Route
        exact
        path="/catalogue"
        render={() => <Catalogue filter={productsfilters} />}
      />
      <Route
        exact
        path="/catalogue/:search"
        render={() => <Catalogue filter={productsfilters} />}
      />
      <Route exact path="/products/:id" component={Producto} />
    </Router>
  );
}

export default App;
