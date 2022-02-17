import React, {useEffect, useState} from "react";

import {
    Main,
    PageTitle,
} from "../../styles/Component.styles";
import Axios from "axios";
import {uuid} from "uuidv4";
import {ProductT} from "./TemplateProducts";


export default function TemplatePage( {name, api} ) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        Axios.get(`http://localhost:3001/api/${api}`)
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

                {products.map(product => <ProductT product={product} key={uuid()}/>)}
            </div>
        </Main>
    );
};
