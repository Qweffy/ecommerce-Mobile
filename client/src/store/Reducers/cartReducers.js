import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  FETCH_LOCAL_CART,
  UPDATE_COUNT,
} from "../types";

export const cartReducer = (
  state = { cartItems: JSON.parse(localStorage.getItem("cartItems") || "[]") },
  action
) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: state.cartItems.concat(action.payload.item),
      };
    case REMOVE_FROM_CART:
      return { cartItems: action.payload.cartItems };
    case FETCH_LOCAL_CART:
      return { cartItems: action.payload.cartItems };
    case UPDATE_COUNT:
      console.log(action.payload);
      let ayuda = state.cartItems.slice();
      ayuda.forEach((item) => {
        if (item.id === action.payload.product.id) {
          item.count = action.payload.acum;
        }
      });
      return {
        ...state,
        cartItems: ayuda,
      };
    default:
      return state;
  }
};
