import { WishlistActionTypes } from "../constants/action-types";

export const wishlistReducer = (wishlist = [], {type, payload}) => {
    let wishlistCopy = [...wishlist];

    switch (type) {
        case WishlistActionTypes.INIT_WISHLIST:
            return payload;

        case WishlistActionTypes.ADD_PRODUCT_TO_WISHLIST:
            console.log('ADD_PRODUCT_TO_WISHLIST')
            const product = payload;

            console.log('wishlistCopy: ');
            console.log(wishlistCopy)

            // If already has this product, do not add
            for (const wishlistProduct of wishlistCopy) {
                console.log(product.title, wishlistProduct.title)
                if (wishlistProduct.title === product.title) {
                    return wishlist;
                }
            }

            // Add new product
            return [...wishlistCopy, product];

        case WishlistActionTypes.REMOVE_PRODUCT:
            for (const wishlistProduct of wishlistCopy) {
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