import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ProductCard.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCamera,
  faChartPie,
  faMicrochip,
} from "@fortawesome/free-solid-svg-icons";
import AddToCart from "../AddToCart/AddToCart.jsx";
import AddToCartInvite from "../AddToCart/AddToCartInvite.jsx";
import { useSelector } from "react-redux";

const ProductCard = ({ product }) => {
  const { name, price, img, id, stock, ram, storage, camara } = product;
  const { user } = useSelector((state) => state.auth);
  let btnDisabled = false;
  const [averageRating, setAverageRating] = useState(0);

  if (stock === 0) btnDisabled = true;

  function renderaddtocartinvite() {
    return (
      <div>
        <AddToCartInvite product={product} id={id} btnDisabled={btnDisabled} />
      </div>
    );
  }

    useEffect(() => {
        getReviews();
    }, []);

    async function getReviews() {
        await axios.get(`http://localhost:4000/products/${id}/reviews`)
        .then(products => {
            let reviews = products.data.data.reviews;

            calculateAverageRating(reviews);
        })
    }

    function calculateAverageRating(reviews) {
        if (reviews.length > 0) {
            let reviewsSum = 0;
            reviews.forEach(review => {
                reviewsSum += review.rating;
            })
            setAverageRating(reviewsSum / reviews.length);
        }

        return;
    }

  function renderaddtocartuser() {
    return (
      <div>
        <AddToCart id={id} btnDisabled={btnDisabled} />
      </div>
    );
  }

  return (
    <div className="product-card pb-2 pt-3 px-1 d-flex">
      <img src={img} alt="img not found" className="product-img mx-0" />
      <div className="product-info p-2 justify-content-between mx-1 mt-1">
        <h4>{name}</h4>
        <div className="d-flex mx-1 my-2">
          <div className="d-flex align-self-center">
            <FontAwesomeIcon icon={faCamera} />
          </div>
          <div>
            <p className="product-details">{camara}</p>
            <p className="product-details">Camera</p>
          </div>
        </div>
        <div className="d-flex mx-1 my-2">
          <div className="d-flex align-self-center">
            <FontAwesomeIcon icon={faChartPie} />
          </div>
          <div>
            <p className="product-details">{storage}</p>
            <p className="product-details">Internal memory</p>
          </div>
        </div>
        <div className="d-flex mx-1 my-2">
          <div className="d-flex align-self-center">
            <FontAwesomeIcon icon={faMicrochip} />
          </div>
          <div>
            <p className="product-details">{ram}</p>
            <p className="product-details">RAM</p>
          </div>
        </div>
        <h3 className="mx-1 mt-3 mb-2">
          <strong>${price}</strong>
        </h3>
        <div className="detailsss">
          {user === undefined ? renderaddtocartinvite() : renderaddtocartuser()}
          <Link to={`/products/${id}`}>
            <Button className='detail-product-card'>Ver mas</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
