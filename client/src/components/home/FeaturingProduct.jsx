import React from "react";
import '../../styles/featuring.scss';
import {addProductToBasket} from "../../redux/actions/basketActions";
import {useDispatch} from "react-redux";
import {select} from "../../redux/actions/productActions";
import {Link} from "react-router-dom"

export function FeaturingProduct( {product} ) {
    const dispatch = useDispatch();

    return (
        <div className="featuring-product">
            <Link to={`/product/${product.title}`} onClick={() => dispatch(select(product))}>
                <img src={product.imageUrl} className="featuring-product-image" alt="img"/>
            </Link>

            <div className="featuring-product-description-wrap">
                <Link to={`/product/${product.title}`} onClick={() => dispatch(select(product))}>
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
                    +
                </button>
            </div>
        </div>
    );

}

function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}