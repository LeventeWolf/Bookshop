import { BasketActionTypes } from "../constants/action-types";

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

export const checkout = () => {
    return {
        type: BasketActionTypes.CHECKOUT,
    }
}