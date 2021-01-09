import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import "./Reviews.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faStar
} from "@fortawesome/free-solid-svg-icons";

const Reviews = ({ match }) => {
    const productId = match.params.id;
    const { user } = useSelector((state) => state.auth);
    const [averageRating, setAverageRating] = useState(0);

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

    return (
        <div></div>   
    )
}

export default Reviews;