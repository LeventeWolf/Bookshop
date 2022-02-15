import React, {useEffect, useState} from "react";
import '../../styles/supply.scss';
import {v4} from "uuid";
import Axios from "axios";
import {ProductM} from "../templates/TemplateProduct";

export default function Supply() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3001/api/all-books')
            .then(response => {
                // shuffleArray(response.data);
                setProducts(response.data);
            })
            .catch(response => {
                console.log(response)
            });
    }, [])

    return (
        <div className="supply-wrap">
            <h1>Supply</h1>

            <div className="supply-container">
                {products.map(product => <ProductM product={product} key={v4()}/>)}
            </div>
        </div>
    )
}