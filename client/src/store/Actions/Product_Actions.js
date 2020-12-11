import axios from 'axios';


export function getProduct(categories) {
  return (dispatch) => {
    console.log('Actions product OK')
    axios.get('http://localhost:4000/products/', {
      params: {
        categories
      }
    })
      .then(res => {
        console.log(res.data)
        dispatch({
          type: 'GET_PRODUCTS',
          payload: res.data
        })
      })
  }
}

export function createProduct(data) {
  return (dispatch) => {
    console.log(data);
    axios.post('http://localhost:4000/products/', data)
      .then((res) => {
        console.log(res.data)
        dispatch({
          type: 'POST_PRODUCTS',
          payload: res.data.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
}