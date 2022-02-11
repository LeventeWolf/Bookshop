import React from "react";
import './supply.scss';
import SupplyProduct from "./SupplyProduct";
import {v4} from "uuid";

export default function Supply() {
    const supply = []

    for (let i = 0; i < 24; i++) {
        supply.push({name: 'book'})
    }
    
    return (
        <div className="supply-wrap">
            <h1>Supply</h1>

            <div className="supply-container">
                {supply.map(supply => <SupplyProduct key={v4()} />)}
            </div>
        </div>
    )
}