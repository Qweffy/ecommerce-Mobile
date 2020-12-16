const initalState = {
  products: [],
  categories: [],
  cart: [],
  user:{
    id:1,
    name: 'Nicolas',
    lastname: 'Valencia',
    mail: 'nico@nico.com'
  }
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
};

export default Reducer;