import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { counterReducer } from "./counterReducer";
import { basketReducer } from "./basketReducer";
import { productReducer } from "./productReducer";

const reducers = combineReducers({
  user: userReducer,
  counter: counterReducer,
  basket: basketReducer,
  product: productReducer,
});

export default reducers;
