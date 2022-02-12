import React from "react";
import {useDispatch} from "react-redux";
import {addProductToBasket} from "../../redux/actions/basketActions";
import {Link} from "react-router-dom";
import {select} from "../../redux/actions/productActions";

export default function SupplyProduct( {product} ) {
    const dispatch = useDispatch();

    return (
        <div className="supply-product">
            <Link to={`/product/${product.title}`} onClick={() => dispatch(select(product))}>
                <img src={product.imageUrl}
                     className="supply-product-image" alt="img" />

                <h2 className="product-title">
                    {product.title}
                </h2>
            </Link>

            <h2 className="product-author">
                {product.author}
            </h2>

            <h2 className="product-price">
                {numberWithSpaces(product.price)} Ft
            </h2>

            <button className="product-basket-btn"
                    onClick={() => dispatch(addProductToBasket(product))}>
                Add to basket
            </button>
        </div>
    )
}

function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}