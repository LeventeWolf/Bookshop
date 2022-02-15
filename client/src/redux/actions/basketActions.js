import { BasketActionTypes } from "../constants/action-types";

export const initBasketProducts = (products) => {
    return {
        type: BasketActionTypes.INIT_PRODUCTS,
        payload: products,
    }
}

export const addProductToBasket = (product) => {
    cacheProduct(product);

    return {
        type: BasketActionTypes.ADD_PRODUCT,
        payload: product,
    }
}

export const removeProductFromBasket = (product) => {
    unCacheProduct(product);

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


/**
 * Store basket products in localStorage
 */
function cacheProduct(product) {
    // If cached basket is empty create new with the product
    if (localStorage.basket === undefined) {
        localStorage.setItem('basket', JSON.stringify([product]))
        return;
    }

    // Append product to cached products
    const cachedProducts = JSON.parse(localStorage.basket);

    // If product already there, increase quantity
    for (const cachedProduct of cachedProducts) {
        if (cachedProduct.title === product.title) {
            cachedProduct.quantity++;
            localStorage.basket = JSON.stringify(cachedProducts);
            return;
        }
    }

    // Store product
    cachedProducts.push(product);
    localStorage.basket = JSON.stringify(cachedProducts);
}

/**
 * Remove basket product from localStorage
 */
function unCacheProduct(product) {
    if (localStorage.basket === undefined) return;

    let basketProducts = JSON.parse(localStorage.basket)

    for (const basketProduct of basketProducts) {
        if (basketProduct.title === product.title) {
            basketProduct.quantity--;
            break;
        }
    }

    localStorage.basket = JSON.stringify(basketProducts.filter(product => product.quantity !== 0));
}