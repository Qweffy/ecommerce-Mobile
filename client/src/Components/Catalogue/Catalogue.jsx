import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard.jsx";
import CategoryCard from "../CategoryCard/CategoryCard.jsx";
import "./Catalogue.css";
import { getProduct } from "../../store/Actions/Product_Actions.js";
import Banner from "./Banner/Banner";
import { Container, Row, Col, Button } from "react-bootstrap";
import Background from "../LandingPage/Twirl__2.mp4";

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
    <div>
      <Container className="container">
        <Row>
          <Col className="filter" xs={3}>
            <div className="">
              <div className="">
                <div className="">
                  <CategoryCard
                    onCategoryToggle={categoryHandler}
                    categories={allCategories}
                  />
                </div>
              </div>
            </div>
          </Col>
          <Col className="catalogo">
            <Row className="products-grid m-5">
              {allProducts.map((product, index) => {
                return (
                  <Col sm={"4"} key={index}>
                    <ProductCard product={product} />
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
      </Container>

    </div >
  );
};

export default Catalogue;
