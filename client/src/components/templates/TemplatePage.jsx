import React, {useEffect, useLayoutEffect, useState} from "react";

import {
    Main,
    PageTitle,
} from "../../styles/Component.styles";
import Axios from "axios";
import {ProductTemplate} from "./TemplateProducts";
import v4 from "uuid/v4";


export default function TemplatePage( {name, api} ) {
    const [products, setProducts] = useState([]);

    useLayoutEffect(() => {
        fetchProducts();
    }, [])

    function fetchProducts() {
        Axios.get(`http://localhost:3001/api/${api}`)
            .then(response => {
                setProducts(response.data);
            })
            .catch(response => {
                console.log(response)
            })
    }


    return (
        <Main>
            <div id="product-page">
                <PageTitle>{name}</PageTitle>

                {/* TODO: BUG product.id is not unique */}
                {products.map(product => <ProductTemplate product={product} key={v4()}/>)}
            </div>
        </Main>
    );
};
