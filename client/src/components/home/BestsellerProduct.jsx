
import React from "react";
import './bestsellers.scss';
import {addProduct} from "../../redux/actions/basketActions";
import {useDispatch} from "react-redux";

export function BestsellerProduct( {product} ) {
    const dispatch = useDispatch();

    return (
        <div className="bestsellers-product-wrap">
            <div className="featuring-product">
                <img src={product.imageUrl}
                     className="featuring-product-image" alt="img" />


                <div className="featuring-product-description-wrap">
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
                        +
                    </button>
                </div>
            </div>
        </div>
    );
}

function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}