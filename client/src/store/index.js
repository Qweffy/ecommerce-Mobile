import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { cartReducer } from "./Reducers/cartReducers";
import { auth } from "./Reducers/authreducer";

import Reducer from "./Reducers/Reducer";

export const st = createStore(
  combineReducers({
    Reducer: Reducer,
    cart: cartReducer,
    auth: auth,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
