import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { counterReducer } from "./counterReducer";
import { basketReducer } from "./basketReducer";

const reducers = combineReducers({
  user: userReducer,
  counter: counterReducer,
  basket: basketReducer,
});

export default reducers;
