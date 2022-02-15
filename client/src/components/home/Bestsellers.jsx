import React, {useEffect, useState} from "react";
import '../../styles/bestsellers.scss';
import {v4} from "uuid";
import Axios from "axios";
import {ProductM} from "../templates/TemplateProducts";

export default function Bestsellers() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3001/api/all-books')
            .then(response => {
                // shuffleArray(response.data);
                setProducts(response.data.splice(0, 5));
            })
            .catch(response => {
                console.log(response)
            });
    }, [])

    return (
        <div className="bestsellers-wrap">
            <h1>Bestsellers</h1>

            <div className="bestsellers-product-container">
                <div className="bestsellers-product-wrap">
                    {products.map(product => <ProductM product={product} key={v4()}/>)}
                </div>
            </div>

        </div>
    )
};

