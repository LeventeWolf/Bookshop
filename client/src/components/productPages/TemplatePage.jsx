import React, {useEffect, useState} from "react";

import {Main, PageTitle} from "../../styles/Component.styles";
import Axios from "axios";
import Product from "../home/Product";
import {v4} from "uuid";
import {uuid} from "uuidv4";
import TemplateProduct from "./TemplateProduct";


export default function TemplatePage( {name} ) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        Axios.get(`http://localhost:3001/api/all-books`)
            .then(response => {
                setProducts(response.data);
            })
            .catch(response => {
                console.log(response)
            })
    }, [])


    return (
        <Main>
            <div id="product-page">
                <PageTitle>{name}</PageTitle>

                {products.map(product => <TemplateProduct product={product} key={uuid()}/>)}
            </div>
        </Main>
    );
};