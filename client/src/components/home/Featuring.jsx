import React from "react";
import './featuring.scss';
import faker from "faker";
import {v4} from "uuid";
import {FeaturingProduct} from "./FeaturingProduct";

export default function Featuring() {
    const featuringProducts = []

    for (let i = 1; i <= 10; i++) {
        const product = {
            title: 'book#' + Math.floor(Math.random() * 100),
            author: faker.name.findName(),
            price: Math.floor(Math.random() * 20000) + 100,
            imageUrl: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/1323/9780132350884.jpg',
            quantity: 1,
        }

        featuringProducts.push(product)
    }


    return (
        <div className="featuring-wrap">
            <h1>Featuring (2022)</h1>

            <div className="featuring-product-container">
                {featuringProducts.map(product => <FeaturingProduct product={product} key={v4()}/>)}
            </div>
        </div>
    )
}