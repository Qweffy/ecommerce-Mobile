import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createReview } from "../../store/Actions/reviewActions.js";
//import axios from "axios";
import './CreateReview.css'

export default function CreateReview() {
    const user = useSelector(state => state.Reducer.user);
    //const reduxReviews = useSelector(state => state.Reducer.reviews);
    const dispatch = useDispatch();

    const [review, setReview] = useState({
        productId: "",
        userId: "",
        rating: "",
        description: ""
    });
  
    function handleChange(e) {
      setReview({
        ...review,
        [e.target.name]: e.target.value,
      });
    }
  
    function handleSubmit() {
      dispatch(createReview(review, review.productId, user.id));
    }

    return (
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="form-group-row">
            <label className="col-sm-2 col-form-label">Product Id</label>
            <div className="col-sm-10">
              <input
                className="form-control m-1"
                placeholder="Insert product id"
                onChange={(e) => {
                  handleChange(e);
                }}
                name="productId"
                type="text"
                required
              />
            </div>
          </div>
          <div className="form-group-row">
            <label className="col-sm-2 col-form-label">Rating</label>
            <div className="col-sm-10">
              <input
                className="form-control m-1"
                placeholder="Insert rating"
                onChange={(e) => {
                  handleChange(e);
                }}
                name="rating"
                type="integer"
                required
              />
            </div>
          </div>
          <div className="form-group-row">
            <label className="col-sm-2 col-form-label">Description</label>
            <div className="col-sm-10">
              <input
                className="form-control m-1"
                placeholder="Insert description"
                onChange={(e) => {
                  handleChange(e);
                }}
                name="description"
                type="text"
                required
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary my-4">
            Add review
          </button>
        </form>
      </div>
    );
}