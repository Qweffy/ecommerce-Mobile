const initalState = {
  productos: [],
  categories: []
}

const Reducer = (state = initalState, action)=>{
  switch( action.type ){
    case 'GET_PRODUCTS':
      return { ...state, productos: action.payload }
    
    case 'POST_PRODUCTS':
      return { ...state, productos: state.productos.concat(action.payload)}

    default:
      return state
  }
}

export default Reducer;