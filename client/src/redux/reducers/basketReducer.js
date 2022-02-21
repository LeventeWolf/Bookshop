import { BasketActionTypes } from "../constants/action-types";

export const basketReducer = (basket = [], {type, payload}) => {
    let basketCopy = [...basket];

    switch (type) {
        case BasketActionTypes.INIT_PRODUCTS:
            return payload;

        case BasketActionTypes.ADD_PRODUCT:
            const product = payload;

            // If already has this product, increase quantity
            for (const basketProduct of basket) {
                if (basketProduct.name === product.name) {
                    basketProduct.quantity++;
                    return basketCopy;
                }
            }

            // Else add new product
            return [...basketCopy, product];

        case BasketActionTypes.REMOVE_PRODUCT:
            for (const basketProduct of basket) {
                if (basketProduct.name === payload.name) {
                    basketProduct.quantity--;

                    break;
                }
            }

            return (basketCopy.filter(product => product.quantity !== 0));

        case BasketActionTypes.CHECKOUT:
            return [];

        default:
            return basket;
    }
}