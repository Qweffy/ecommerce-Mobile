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
  faStar
} from "@fortawesome/free-solid-svg-icons";

const ProductCard = ({ product }) => {
    const { name, price, img, id, stock, ram, storage, camara } = product;
    let btnDisabled = false;
    const [averageRating, setAverageRating] = useState(0);

    if (stock === 0) btnDisabled = true;

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
            setAverageRating(parseInt((reviewsSum / reviews.length).toFixed()));
        }

        return;
    }

  return (
    <div className="product-card pb-2 pt-3 px-1 d-flex">
      <div>
        <img src={img} alt="img not found" className="product-img mx-0" />
        <div className="d-flex justify-content-center m-3">
            {
                (Array(averageRating).fill(0)).map(n => {
                    return (
                        <FontAwesomeIcon icon={faStar} />
                    )
                })
            }
        </div>
      </div>
      <div className="product-info p-2 justify-content-between mx-1 mt-0">
        <h4>{name}</h4>
        <div className="d-flex mx-1 my-2">
          <div className="d-flex align-self-center">
            <FontAwesomeIcon icon={faCamera} />
          </div>
          <div className="mx-2">
            <p className="product-details">{camara}</p>
            <p className="product-details">Camera</p>
          </div>
        </div>
        <div className="d-flex mx-1 my-2">
          <div className="d-flex align-self-center">
            <FontAwesomeIcon icon={faChartPie} />
          </div>
          <div className="mx-2">
            <p className="product-details">{storage}</p>
            <p className="product-details">Internal memory</p>
          </div>
        </div>
        <div className="d-flex mx-1 my-2">
          <div className="d-flex align-self-center">
            <FontAwesomeIcon icon={faMicrochip} />
          </div>
          <div className="mx-2">
            <p className="product-details">{ram}</p>
            <p className="product-details">RAM</p>
          </div>
        </div>
        <h3 className="mx-1 mt-3 mb-2">
          ${price}
        </h3>
        <div className="detailsss">
          <Link to={`/products/${id}`}>
            <Button className='detail-product-card'>See more</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
