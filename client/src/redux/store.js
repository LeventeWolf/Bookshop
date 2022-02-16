import {createStore} from "redux";
import reducers from "./reducers/index";
import {loadState, saveState} from "../lib/localStorage"

const preloadedStates = {
    product: loadState('product'),
    basket: loadState('basket'),
    user: loadState('user'),
}

const store = createStore(
    reducers,
    preloadedStates,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
    saveState('product', store.getState().product)
    saveState('basket', store.getState().basket)
    saveState('user', store.getState().user)
})

export default store;
