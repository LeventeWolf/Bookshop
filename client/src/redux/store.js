import {createStore, applyMiddleware, compose} from "redux";
import reducers from "./reducers/index";
import thunk from "redux-thunk";
import {loadState, saveState} from "../lib/localStorage"

//using more than 1 enhancer in createStore gives you parameter problem thus we need composeEnhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;


const preloadedStates = {
    product: loadState('product'),
    basket: loadState('basket'),
    user: loadState('user'),
}

const store = createStore(
    reducers,
    preloadedStates,
    composeEnhancers(applyMiddleware(thunk)),
);

store.subscribe(() => {
    saveState('product', store.getState().product)
    saveState('basket', store.getState().basket)
    saveState('user', store.getState().user)
})

export default store;
