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
            setAverageRating(parseInt((reviewsSum / reviews.length).toFixed()));
        }

        return;
    }

    return (
        <div className="reviews-card border-top">
            <h2 className="reviews-header">Product opinions</h2>
            <div className="d-flex my-4">
                <h1 className="average-rating">{averageRating}</h1>
                <div>
                    <div className="d-flex">
                        {
                            (Array(averageRating).fill(0)).map(n => {
                                return (
                                    <FontAwesomeIcon icon={faStar} />
                                )
                            })
                        }
                    </div>
                    <h5 className="py-4 m-0">Average between {reviews.length} opinions</h5>
                </div>
            </div>
            {
                reviews.map(review => {
                    return (
                        <Review averageRating={averageRating} description={review.description}/>
                    )
                })
            }
        </div>   
    )
}

export default Reviews;