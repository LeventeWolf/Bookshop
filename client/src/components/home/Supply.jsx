import React from "react";
import './supply.scss';
import SupplyProduct from "./SupplyProduct";
import {v4} from "uuid";

const faker = require('faker');

export default function Supply() {
    const supply = []

    for (let i = 1; i <= 24; i++) {
        const product = {
            name: 'book     #' + i,
            author: faker.name.findName(),
            price: numberWithSpaces(10000 + i * 500),
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

function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}