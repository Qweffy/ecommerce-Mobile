import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  FETCH_LOCAL_CART,
  CREATE_ORDER,
  UPDATE_COUNT,
  UPDATE_ORDER,
  DOWN_ORDER
} from "../types";

const initalOrder = {
  cartItems: JSON.parse(localStorage.getItem("cartItems") || "[]"),
  TotalOrden: 0
}

export const cartReducer = (state = initalOrder, action) => {
  
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: action.payload.item,
      };

    case REMOVE_FROM_CART:
      return {...state, cartItems: action.payload.cartItems };

    case FETCH_LOCAL_CART:
      return {...state,  cartItems: action.payload.cartItems };

    case UPDATE_COUNT:
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

    case UPDATE_ORDER:
      console.log(state.TotalOrden);
      console.log(action.payload);
      let changeOrder = state.TotalOrden + action.payload
     
      return { ...state, TotalOrden: changeOrder};

    case DOWN_ORDER:
      console.log(state.TotalOrden);
      console.log(action.payload);
      let changeOrderDown = state.TotalOrden - action.payload
      return { ...state, TotalOrden: changeOrderDown};

    default:
      return state;
  }
};
