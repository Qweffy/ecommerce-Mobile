import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard.jsx";
import CategoryCard from "../CategoryCard/CategoryCard.jsx";
import "./Catalogue.css";
import { getProduct } from "../../store/Actions/Product_Actions.js";

const Catalogue = () => {
  // Get list of products and categories from DB
  const [allProducts, setAllProducts] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    getProduct(selectedCategories).then((products) => {
      setAllProducts(products.data);
    });
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
      <div className="d-flex">
        <div className="categories-col m-5 border rounded">
          <CategoryCard
            onCategoryToggle={categoryHandler}
            categories={allCategories}
          />
        </div>
        <div className="products-grid m-5">
          {allProducts.map((product, index) => {
            return (
              <Link to={`/products/${product.id}`}>
                <div key={index}>
                  <ProductCard product={product} />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Catalogue;
