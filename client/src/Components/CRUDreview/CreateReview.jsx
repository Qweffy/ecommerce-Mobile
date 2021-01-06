import React, { useState } from "react";
import axios from "axios";
import './CreateReview.css'

export default function CreateReview() {
    const [reviews, setReviews] = useState({
        productId: "",
        userId: "",
        rating: "",
        description: ""
    });
  
    function handleChange(e) {
      setReview({
        ...reviews,
        [e.target.name]: e.target.value,
      });
    }
  
    function postreview() {
      axios
        .post("http://localhost:4000/category/", category)
        .then(function (response) {
          history.push("/showCategories");
        });
    }

    return (
    <div className="container">
      <form onSubmit={postcategories}>
        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Product Id</label>
          <div class="col-sm-10">
            <input
              class="form-control"
              placeholder="Insert product Id"
              onChange={(e) => {
                handleChange(e);
              }}
              name="productId"
              type="text"
              required
            />
            <button type="submit" class="btn btn-primary my-4">
              Add category
            </button>            
          </div>
        </div>
      </form>
    </div>
    );
}