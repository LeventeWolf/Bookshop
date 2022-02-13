import { BasketActionTypes } from "../constants/action-types";

export const basketReducer = (basket = [], {type, payload}) => {
    let basketCopy = [...basket];

    switch (type) {
        case BasketActionTypes.ADD_PRODUCT:
            const product = payload;

            // If already has this product, increase quantity
            for (const basketProduct of basket) {
                if (basketProduct.title === product.title) {
                    basketProduct.quantity++;
                    return basketCopy;
                }
            }

            // Else add new product
            return [...basketCopy, product];

        case BasketActionTypes.REMOVE_PRODUCT:
            const productTitle = payload;

            for (const basketProduct of basket) {
                if (basketProduct.title === productTitle) {
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