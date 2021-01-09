import React from "react";
import "./Review.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faStar
} from "@fortawesome/free-solid-svg-icons";

const Review = ({ description, averageRating }) => {
    return (
        <div className="my-5">
            <div className="d-flex mb-2">
            {
                (Array(averageRating).fill(0)).map(n => {
                    return (
                        <FontAwesomeIcon icon={faStar} />
                    )
                })
            }
            </div>
            <h5>{description}</h5>
        </div>
    )
}

export default Review;