import React from "react";
import {useDispatch} from "react-redux";
import {addProductToBasket, removeProductFromBasket} from "../../redux/actions/basketActions";
import {select} from "../../redux/actions/productActions";
import {Link} from "react-router-dom";

export default function BasketProduct({product}) {
    const dispatch = useDispatch();

    return (
        <div className="basket-product-wrap">
            <Link to={`/product/${product.title}`} onClick={() => dispatch(select(product))}>
                <img className='product-image' src={product.imageUrl} alt="alt"/>
            </Link>

            <div className='product-description-container'>
                <Link to={`/product/${product.title}`} onClick={() => dispatch(select(product))}>
                    <h3 className="product-title">{product.title}</h3>
                </Link>

                <h4 className="product-author">{product.author}</h4>
                <h4 className="product-price">{numberWithSpaces(product.price)} Ft</h4>
            </div>

            <div className="product-actions-container">
                <div className="quantity-wrap">
                    <span>Quantity: {product.quantity}</span>
                    <button className="product-quantity" onClick={() => dispatch(addProductToBasket(product))}>
                        +
                    </button>
                </div>
                <h3 className="product-price">{numberWithSpaces(product.quantity * product.price)} Ft</h3>
                <button className="product-remove" onClick={() => dispatch(removeProductFromBasket(product.title))}>
                    Remove
                </button>
            </div>
        </div>
    );
}

function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}