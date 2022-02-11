import React from "react";
import {useDispatch} from "react-redux";
import {addProduct, removeProduct} from "../../redux/actions/basketActions";

export default function BasketProduct( {product} ) {
    const dispatch = useDispatch();

    return (
        <div className="basket-product-wrap">
            <img className='basket-product-image' src={product.imageUrl} alt="alt" />

            <div className='product-description-container'>
                <h3 className="product-title">{product.title}</h3>
                <h4 className="product-author">{product.author}</h4>
                <h4 className="product-price">{numberWithSpaces(product.price)} Ft</h4>
            </div>

            <div className="product-actions-container">
                <button className="product-quantity" onClick={() => dispatch(addProduct(product))}>
                    Add
                </button>
                <h3 className="product-price">{numberWithSpaces(product.price)} Ft</h3>
                <button className="product-remove" onClick={() => dispatch(removeProduct(product.title))}>
                    Remove
                </button>
            </div>
        </div>
    );
}

function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}