import React from "react";
import {useDispatch} from "react-redux";
import {addProduct} from "../../redux/actions/basketActions";

export default function Product( {product} ) {
    const dispatch = useDispatch();

    return (
        <div className="supply-product">
            <img src={product.imageUrl}
                 className="supply-product-image" alt="img" />

            <h2 className="product-title">
                {product.title}
            </h2>

            <h2 className="product-author">
                {product.author}
            </h2>

            <h2 className="product-price">
                {numberWithSpaces(product.price)} Ft
            </h2>

            <button className="product-basket-btn"
                    onClick={() => dispatch(addProduct(product))}>
                Add to basket
            </button>
        </div>
    )
}

function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}