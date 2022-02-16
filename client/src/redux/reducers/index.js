import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { basketReducer } from "./basketReducer";
import { productReducer } from "./productReducer";

const reducers = combineReducers({
  user: userReducer,
  basket: basketReducer,
  product: productReducer,
});

export default reducers;
