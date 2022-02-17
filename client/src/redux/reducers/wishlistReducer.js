import { WishlistActionTypes } from "../constants/action-types";

export const wishlistReducer = (wishlist = [], {type, payload}) => {
    let wishlistCopy = [...wishlist];

    switch (type) {
        case WishlistActionTypes.INIT_WISHLIST:
            return payload;

        case WishlistActionTypes.ADD_PRODUCT:
            const product = payload;

            // If already has this product, increase quantity
            for (const wishlistProduct of wishlist) {
                if (wishlistProduct.title === product.title) {
                    wishlistProduct.quantity++;
                    return wishlistCopy;
                }
            }

            // Else add new product
            return [...wishlistCopy, product];

        case WishlistActionTypes.REMOVE_PRODUCT:
            for (const wishlistProduct of wishlist) {
                if (wishlistProduct.title === payload.title) {
                    wishlistProduct.quantity--;

                    break;
                }
            }

            return (wishlistCopy.filter(product => product.quantity !== 0));

        case WishlistActionTypes.CLEAR_WISHLIST:
            return [];

        default:
            return wishlist;
    }
}