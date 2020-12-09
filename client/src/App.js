import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Productos from "./Components/Productos/Productos";
import CreateProduct from "./Components/CRUDproduct/CreateProduct.jsx";

function App() {
  return (
    <Router>
      <Route exact path="/createproduct" component={CreateProduct} />
    </Router>
  );
}

export default App;
