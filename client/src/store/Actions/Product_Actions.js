import axios from 'axios';


export function getProduct(categories) {
  return (axios.get('http://localhost:4000/products/', {
    params: {
      categories
    }
  })
  )
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

export function postsugestions(sugestions) {
  return(dispatch) => {
  dispatch({
    type: 'POST_SUGESTIONS',
    payload: sugestions
  })}
}
