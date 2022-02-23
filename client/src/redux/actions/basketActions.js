import { BasketActionTypes } from "../constants/action-types";
import {initWishlistProducts} from "./wishlistActions";
import Axios from "axios";

export const initBasketProducts = (products) => {
    return {
        type: BasketActionTypes.INIT_PRODUCTS,
        payload: products,
    }
}

export const addProductToBasket = (product) => {
    return {
        type: BasketActionTypes.ADD_PRODUCT,
        payload: product,
    }
}

export const removeProductFromBasket = (product) => {
    return {
        type: BasketActionTypes.REMOVE_PRODUCT,
        payload: product
    }
}


export const handleCheckoutAction = (username, products)  => async (dispatch) => {
    Axios.post(`http://localhost:3001/api/checkout/`, {
        username,
        products
    }).then(response => {
        console.log(response)
        dispatch(checkout())
    }).catch(response => {
        console.log(response)
    });
}


export const checkout = () => {
    return {
        type: BasketActionTypes.CHECKOUT,
    }
}