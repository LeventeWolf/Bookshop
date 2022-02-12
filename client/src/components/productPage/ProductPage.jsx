import React from "react";

import {useSelector} from "react-redux";
import Product from "../home/Product";


export default function ProductPage() {
    const product = useSelector(state => state.product);

    return (
        <div className="main-wrap">
            <div id="product-page">
                <h1 className="page-title">Product Details</h1>

                <Product product={product}/>
            </div>
        </div>
    );
};