import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {addProduct} from "../../redux/actions/basketActions";

export default function SupplyProduct( {product} ) {
    const basket = useSelector(state => state.basket)
    const dispatch = useDispatch();

    return (
        <div className="supply-product">
            <img src={product.imageUrl}
                 className="supply-product-image" alt="img" />

            <h2 className="supply-product-title">
                {product.title}
            </h2>

            <h2 className="supply-product-author">
                {product.author}
            </h2>

            <h2 className="supply-product-price">
                {numberWithSpaces(product.price)} Ft
            </h2>

            <button className="supply-product-add-to-basket"
                    onClick={() => dispatch(addProduct(product))}>
                Add to basket
            </button>
        </div>
    )
}

function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}