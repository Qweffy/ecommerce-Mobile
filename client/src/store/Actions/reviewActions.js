import axios from "axios";

export function createReview(data, productId, userId) {
    return (dispatch) => {
      console.log(data);
      axios.post(`http://localhost:4000/products/${productId}/reviews/${userId}`, data)
        .then((res) => {
          console.log(res.data)
          // Store in redux
          dispatch({
            type: 'POST_REVIEWS',
            payload: res.data.data
          })
        })
        .catch(err => {
          console.log(err)
        })
    }
}