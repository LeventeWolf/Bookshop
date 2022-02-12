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
            longTitle: 'S-book #' + i + ' : A Handbook of Agile Software Craftsmanship',
            description: 'Even bad code can function. But if code isn\'t clean, it can bring a development organization to its knees. Every year, countless hours and significant resources are lost because of poorly written code. But it doesn\'t have to be that way.',
            author: faker.name.findName(),
            price: Math.floor(Math.random() * 20000) + 100,
            imageUrl: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/1323/9780132350884.jpg',
            type: 'Paperback',
            language: 'English',
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
