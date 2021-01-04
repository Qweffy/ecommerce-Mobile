import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import Reducer from "./Reducers/Reducer";

export const st = createStore(
  Reducer,
  composeWithDevTools(applyMiddleware(thunk))
);

// import { createStore, applyMiddleware, combineReducers } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import thunk from "redux-thunk";
// import { cartReducer } from "./Reducers/cartReducers";

// import Reducer from "./Reducers/Reducer";

// export const st = createStore(
//   combineReducers({
//     Reducer: Reducer,
//     cart: cartReducer,
//   }),
//   composeWithDevTools(applyMiddleware(thunk))
// );
