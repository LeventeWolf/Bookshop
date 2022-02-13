import React, {useEffect, useState} from "react";
import '../../styles/supply.scss';
import {v4} from "uuid";
import Axios from "axios";
import {numberWithSpaces, shuffleArray} from "../../lib/helper";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {select} from "../../redux/actions/productActions";
import {addProductToBasket} from "../../redux/actions/basketActions";

export default function Supply() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3001/api/all-books')
            .then(response => {
                shuffleArray(response.data);
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
                {products.map(product => <SupplyProduct product={product} key={v4()}/>)}
            </div>
        </div>
    )
}

export function SupplyProduct( {product} ) {
    const dispatch = useDispatch();

    return (
        <div className="supply-product">
            <Link to={`/product/${product.title}`} onClick={() => dispatch(select(product))}>
                <img src={product.imageUrl}
                     className="supply-product-image" alt="img" />

                <h2 className="product-title">
                    {product.title}
                </h2>
            </Link>

            <h2 className="product-author">
                {product.author}
            </h2>

            <h2 className="product-price">
                {numberWithSpaces(product.price)} Ft
            </h2>

            <button className="product-basket-btn"
                    onClick={() => dispatch(addProductToBasket(product))}>
                Add to basket
            </button>
        </div>
    )
}

