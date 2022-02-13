import React from "react";

import {useSelector} from "react-redux";
import Product from "../home/Product";
import {Main, PageTitle} from "../../styles/Component.styles";


export default function ProductPage() {
    const product = useSelector(state => state.product);

    return (
        <Main>
            <div id="product-page">
                <PageTitle>Product Details</PageTitle>

                {Object.keys(product).length !== 0 ?
                    <Product product={product}/>
                        :
                    'Please select a product!:)'
                }
            </div>
        </Main>
    );
};