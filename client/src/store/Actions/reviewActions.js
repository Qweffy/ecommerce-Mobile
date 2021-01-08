import axios from "axios";

export function createReview(data, productId, userId) {
    return (dispatch) => {
      axios.post(`http://localhost:4000/products/${productId}/reviews/${userId}`, data)
        .then((res) => {
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