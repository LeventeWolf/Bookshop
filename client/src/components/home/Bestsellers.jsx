import React from "react";
import './bestsellers.scss';
import faker from "faker";
import {v4} from "uuid";
import SupplyProduct from "./SupplyProduct";

export default function Bestsellers() {
    const bestsellerProducts = [];

    for (let i = 1; i <= 5; i++) {
        const product = {
            title: 'B-book #' + i,
            longTitle: 'B-book #' + i + ' : A Handbook of Agile Software Craftsmanship',
            description: 'Even bad code can function. But if code isn\'t clean, it can bring a development organization to its knees. Every year, countless hours and significant resources are lost because of poorly written code. But it doesn\'t have to be that way.',
            author: faker.name.findName(),
            price: Math.floor(Math.random() * 20000) + 100,
            imageUrl: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/1323/9780132350884.jpg',
            type: 'Paperback',
            language: 'English',
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
