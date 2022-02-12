import React from "react";
import './bestsellers.scss';
import faker from "faker";
import {FeaturingProduct} from "./FeaturingProduct";
import {v4} from "uuid";
import {BestsellerProduct} from "./BestsellerProduct";
import SupplyProduct from "./SupplyProduct";

export default function Bestsellers() {
    const bestsellerProducts = [];

    for (let i = 1; i <= 5; i++) {
        const product = {
            title: 'B-book #' + i,
            author: faker.name.findName(),
            price: Math.floor(Math.random() * 20000) + 100,
            imageUrl: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/1323/9780132350884.jpg',
            quantity: 1,
        }

        bestsellerProducts.push(product)
    }

    return (
        <div className="bestsellers-wrap">
            <h1>Bestsellers</h1>

            <div className="bestsellers-product-container">
                <div className="bestsellers-product-wrap">
                    {bestsellerProducts.map(product => <SupplyProduct product={product} key={v4()}/>)}
                </div>
            </div>

        </div>
    )
};
