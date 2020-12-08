import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Searchbar from "./components/Searchbar/Searchbar";
import axios from "axios";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Searchbar
          onSearch={(product) => {
            console.log(product);
            axios.get("http://localhost:4000/products/search?query=" + product);
          }}
        ></Searchbar>
      </header>
    </div>
  );
}

export default App;
