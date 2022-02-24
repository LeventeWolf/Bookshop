import React, {useEffect} from "react";

import {
    Main,
    PageTitle
} from "../styles/Component.styles";
import {useDispatch, useSelector} from "react-redux";
import {ProductW} from "./templates/TemplateProducts";
import {fetchWishlistProducts} from "../redux/actions/wishlistActions";


export default function Wishlist( ) {
    const wishlistProducts = useSelector(state => state.wishlist)
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchWishlistProducts(user.username));
    }, [])

    return (
        <Main>
            <div id="product-page">
                <PageTitle>Wishlist</PageTitle>

                {wishlistProducts.map(product => <ProductW product={product} key={product.id}/>)}
            </div>
        </Main>
    );
};
