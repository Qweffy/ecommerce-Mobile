import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  FETCH_LOCAL_CART,
  UPDATE_COUNT,
  UPDATE_ORDER,
  DOWN_ORDER
} from "../types";

const initalOrder = {
  cartItems: JSON.parse(localStorage.getItem("cartItems") || "[]"),
  TotalOrden: 0
}

//funcion de calcular nuevo total
function newTotal (arrItems){
  // se calcula el total de cada producto del carrito
  if(arrItems.length > 0){let totalNew = arrItems.map(elem => {
    return elem.price * elem.count
  })
  // se suman todos los totales de los productos para 
  // encontrar el total de la orden
  let totalInv =totalNew.reduce( (acum, curr)=>{
    return acum + curr
  })
  return totalInv}
}

if( initalOrder.cartItems.length > 0){
  let initTotal = newTotal(initalOrder.cartItems)
  initalOrder.TotalOrden = initTotal;

}

export const cartReducer = (state = initalOrder, action) => {

  switch (action.type) {
    case ADD_TO_CART:
      let addNewItemTotal = newTotal(action.payload.item)
      return {
        ...state,
        cartItems: action.payload.item,
        TotalOrden: addNewItemTotal
      };

    case REMOVE_FROM_CART:
      let removrItemToal = newTotal(action.payload.cartItems)
      if (removrItemToal ){
        return {
          ...state, 
          cartItems: action.payload.cartItems,
          TotalOrden: removrItemToal
        }
      }else{
        return {
          ...state, 
          cartItems: action.payload.cartItems,
          TotalOrden: 0
        }
      }

    case FETCH_LOCAL_CART:
      return {...state,  cartItems: action.payload.cartItems };

    case UPDATE_COUNT:
      let ayuda = state.cartItems.slice();
      // se agrega 1 al count del item especifico
      ayuda.forEach((item) => {
        if (item.id === action.payload.product.id) {
          item.count = action.payload.acum;
        }
      });

      //se llama la funcion de total de la orden
      let addCountTotal = newTotal(ayuda)

      localStorage.setItem('cartItems', JSON.stringify(ayuda))
      return {
        ...state,
        cartItems: ayuda,
        TotalOrden: addCountTotal
      };

    default:
      return state;
  }
};
