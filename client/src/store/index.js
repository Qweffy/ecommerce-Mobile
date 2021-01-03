import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import Reducer from "./Reducers/Reducer";

export const st = createStore(
  Reducer,
  composeWithDevTools(applyMiddleware(thunk))
);
