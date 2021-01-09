import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import "./Reviews.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faStar
} from "@fortawesome/free-solid-svg-icons";
import Review from "../Review/Review.jsx";

const Reviews = ({ productId }) => {
    const { user } = useSelector((state) => state.auth);
    const [averageRating, setAverageRating] = useState(0);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        getReviews();
    }, []);

    async function getReviews() {
        await axios.get(`http://localhost:4000/products/${productId}/reviews`)
        .then(products => {
            let reviews = products.data.data.reviews;

            calculateAverageRating(reviews);
            setReviews(reviews);
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

    return (
        <div className="reviews-card border-top">
            <h2 className="reviews-header">Product opinions</h2>
            <div className="d-flex my-4">
                <h1 className="average-rating">4.0</h1>
                <div>
                    <div className="d-flex">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                    <p className="py-4 m-0">Average between 2 opinios</p>
                </div>
            </div>
            {
                reviews.map(review => {
                    return (
                        <Review />
                    )
                })
            }
        </div>   
    )
}

export default Reviews;