import React, {useEffect, useState} from "react";

import {
    Main,
    PageTitle,
} from "../../styles/Component.styles";
import Axios from "axios";
import {ProductT} from "./TemplateProducts";
import v4 from "uuid/v4";
import {useDispatch} from "react-redux";


export default function TemplatePage( {name, api} ) {
    const dispatch = useDispatch();
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

                {products.map(product => <ProductT product={product} key={v4()}/>)}
            </div>
        </Main>
    );
};
