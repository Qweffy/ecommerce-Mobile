import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CreateCategory from "./Components/CRUDcategory/CreateCategory.jsx";
import Productos from "./Components/Productos/Productos";
import CreateProduct from "./Components/CRUDproduct/CreateProduct.jsx";

function App() {
  return (
    <Router >
      <Route exact path='/showProducts' component={Productos} />
      <Route exact path="/createproduct" component={CreateProduct} />
      <Route exact path="/createcategory" component={CreateCategory} />
    </Router>
  );
}

export default App;
