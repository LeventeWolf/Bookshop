import React, {useEffect, useState} from "react";

import {useSelector} from "react-redux";
import Product from "../home/Product";
import {Main, PageTitle} from "../../styles/Component.styles";
import Axios from "axios";
import {shuffleArray} from "../../lib/helper";
import {FeaturingProduct} from "../home/FeaturingProduct";
import {v4} from "uuid";
import '../../styles/relatedProducts.scss'


export default function ProductPage() {
    const product = useSelector(state => state.product);

    const [relatedProducts, setRelatedProducts] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3001/api/all-books')
            .then(response => {
                shuffleArray(response.data);
                setRelatedProducts(response.data.splice(0, 5));
            })
            .catch(response => {
                console.log(response)
            });
    }, [])

    console.log(relatedProducts)

    return (
        <Main>
            <div id="product-page">
                <PageTitle>Product Details</PageTitle>

                {Object.keys(product).length !== 0 ?
                    <Product product={product}/>
                        :
                    'Please select a product!:)'
                }

                {Object.keys(product).length !== 0 ?
                    <>
                        <h2 className="secondary-title">People who bought this also bought</h2>

                        <div className="related-wrap">
                            <div className="related-products-container">
                                {relatedProducts.map(product => <FeaturingProduct product={product} key={v4()}/>)}
                            </div>
                        </div>
                    </>

                    : ''
                }
            </div>
        </Main>
    );
};