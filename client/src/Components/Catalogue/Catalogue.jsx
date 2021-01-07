import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Background from "../LandingPage/Twirl__2.mp4";
import ProductCard from "../ProductCard/ProductCard.jsx";
import CategoryCard from "../CategoryCard/CategoryCard.jsx";
import "./Catalogue.css";
import { getProduct } from "../../store/Actions/Product_Actions.js";

const Catalogue = (props) => {
  // Get list of products and categories from DB
  const [allProducts, setAllProducts] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    if (props.match.params.search) {
      axios
        .get(
          "http://localhost:4000/products/search/" + props.match.params.search
        )
        .then((res) => {
          setAllProducts(res.data);
        });
    } else {
      getProduct(selectedCategories).then((products) => {
        setAllProducts(products.data);
      });
    }
  }, [selectedCategories]);

  useEffect(() => {
    axios.get("http://localhost:4000/category/").then((categories) => {
      setAllCategories(categories.data);
    });
  }, []);

  const categoryHandler = (name) => {
    if (selectedCategories.includes(name)) {
      setSelectedCategories(
        selectedCategories.filter((element) => element !== name)
      );
    } else {
      setSelectedCategories([...selectedCategories, name]);
    }
  };

  return (
    <div className="m-4">
      <video
        autoPlay
        muted
        loop
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
        }}
      >
        <source src={Background} type="video/mp4" />
      </video>
      <div className="d-flex">
        <div className="m-5">
          <CategoryCard
            onCategoryToggle={categoryHandler}
            categories={allCategories}
          />
        </div>
        <div className="products-grid m-5">
          {allProducts.map((product, index) => {
            return (
                <div key={index}>
                  <ProductCard product={product} />
                </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Catalogue;

