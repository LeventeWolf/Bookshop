/**
 * Naming conventions
 * SM : Small - used for Featuring, Related products
 * M  : Medium - used for Supply & Bestsellers
 * L  : Large  - used for TemplatePage (Songs, Films, Music, etc...)
 */


import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {select} from "../../redux/actions/productActions";
import {numberWithSpaces} from "../../lib/helper";
import BasketButton from "./BasketButton";
import React from "react";

/**
 * SM : Small - used for Featuring, Related products
 */
export function ProductSM ( {product} ) {

}


/**
 * M  : Medium - used for Supply & Bestsellers
 */
export function ProductM ( {product} ) {
    const dispatch = useDispatch();
    const isMember = useSelector(state => state.user.isMember);

    return (
        <div className="supply-product">
            <Link to={`/product/${product.title}`} onClick={() => dispatch(select(product))}>
                <img src={product.imageUrl}
                     className="supply-product-image" alt="img"/>

                <h2 className="product-title">
                    {product.title}
                </h2>
            </Link>

            <h2 className="product-author">
                {product.author}
            </h2>

            <div className="price-container">
                {isMember ?
                    <h3 className="original-price">{numberWithSpaces(isMember ? product.price : '')} Ft</h3>
                    : null
                }

                <h2 className="product-price">
                    {numberWithSpaces(isMember ? Math.round(product.price * 0.9) : product.price)} Ft
                </h2>
            </div>

            <BasketButton style={{width:'100%', height: '37px', marginTop: 10, backgroundColor: '#10bbd5'}} product={product}>
                Add to Basket
            </BasketButton>
        </div>
    );
}


/**
 * L  : Large  - used for TemplatePage (Songs, Films, Music, etc...)
 */
export function ProductL ( {product} ) {

}
