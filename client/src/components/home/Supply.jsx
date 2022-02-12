import React from "react";
import './supply.scss';
import SupplyProduct from "./SupplyProduct";
import {v4} from "uuid";

const faker = require('faker');

export default function Supply() {
    const supply = []

    for (let i = 1; i <= 24; i++) {
        const product = {
            title: 'S-book #' + i,
            author: faker.name.findName(),
            price: Math.floor(Math.random() * 20000) + 100,
            imageUrl: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/mid/9780/1323/9780132350884.jpg',
            quantity: 1,
        }

        supply.push(product)
    }



    return (
        <div className="supply-wrap">
            <h1>Supply</h1>

            <div className="supply-container">
                {supply.map(product => <SupplyProduct product={product} key={v4()}/>)}
            </div>
        </div>
    )
}
