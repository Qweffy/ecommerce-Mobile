const initalState = {
  products: [],
  categories: [],
  cart: []
}

const Reducer = (state = initalState, action)=>{
  switch( action.type ){
    
    case 'GET_PRODUCTS':
      return { ...state, products: action.payload }
    
    case 'POST_PRODUCTS':
      return { ...state, products: state.products.concat(action.payload)}

    default:
      return state
  }
}

export default Reducer;