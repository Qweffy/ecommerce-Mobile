import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  FETCH_LOCAL_CART,
  UPDATE_COUNT,
  CREATE_ORDER,
  UPDATE_ORDER,
  DOWN_ORDER
} from "../types";

export const addToCart = (product) => (dispatch, getState) => {

  const cartItems = getState().cart.cartItems.slice();
  console.log(cartItems);
  let alreadyExists = false;

  cartItems.map((x) => {
    if (x.id === product.id) {
      alreadyExists = true;
      x.count++;
    }
  });
  
  if (!alreadyExists) {
    product.count = 1;
    cartItems.push(product);
  }

  dispatch({
    type: ADD_TO_CART,
    payload: { item: cartItems },
  });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const removeFromCart = (product) => (dispatch, getState) => {
  const cartItems = getState()
    .cart.cartItems.slice()
    .filter((x) => x.id !== product.id);
  dispatch({ type: REMOVE_FROM_CART, payload: { cartItems } });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export function editCount(product, acum) {
  return (dispatch) => {
    dispatch({
      type: UPDATE_COUNT,
      payload: {
        product,
        acum,
      },
    });
  };
}

export const fetchFromCart = () => (dispatch, getState) => {
  dispatch({
    type: FETCH_LOCAL_CART,
    payload: { cartItems: JSON.parse(localStorage.getItem("cartItems")) },
  });
};

export function upTotal (data){
  return (dispatch) =>{
    dispatch({
      type:  UPDATE_ORDER,
      payload: data
    })
  }
}

export function downTotal (data){
  return (dispatch) =>{
    dispatch({
      type: DOWN_ORDER,
      payload: data
    })
  }
}