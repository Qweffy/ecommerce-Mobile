import React from "react";
import "./Review.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faStar
} from "@fortawesome/free-solid-svg-icons";

const Review = () => {
    return (
        <div className="my-5">
            <div className="d-flex mb-2">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
            </div>
            <p>Average between 2 opinios</p>
        </div>
    )
}

export default Review;