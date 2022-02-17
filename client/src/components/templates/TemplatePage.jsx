import React, {useEffect, useState} from "react";

import {
    Container,
    DescriptionContainer,
    Main,
    PageTitle, ProductAuthor,
    ProductContainer,
    ProductImage, ProductPrice, ProductTitle, ProductType, Section, WishlistButton
} from "../../styles/Component.styles";
import Axios from "axios";
import {uuid} from "uuidv4";
import {numberWithSpaces} from "../../lib/helper";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {selectProduct} from "../../redux/actions/productActions";
import {addProductToBasket} from "../../redux/actions/basketActions";
import BasketButton from "./BasketButton";


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

function TemplateProduct( {product} ) {
    const dispatch = useDispatch();
    const isMember = useSelector(state => state.user.isMember);

    return (
        <Container style={{height: '200px'}}>
            <ProductContainer>
                <ProductImage w={'175px'} h={'180px'} src={product.imageUrl} alt="productImage"/>

                <DescriptionContainer>
                    <Section borderBottom>
                        <Link to={`/product/${product.title}`} onClick={() => dispatch(selectProduct(product))}>
                            <ProductTitle fontSize='18pt'>{product.longTitle}</ProductTitle>
                        </Link>
                    </Section>

                    <Section style={{marginBottom: 'auto', marginTop: '40px'}}>
                        <ProductType>{product.type}</ProductType>
                        <ProductAuthor>By (author): {product.author}</ProductAuthor>
                    </Section>

                    <Section style={{marginBottom: '20px'}}>
                        <ProductAuthor>{product.description}</ProductAuthor>
                    </Section>

                </DescriptionContainer>


                <Section style={{marginLeft: '50px', width: '200px'}}>
                    <Section borderBottom style={{marginBottom: 'auto'}}>
                        <div className="price-container-row">
                            {isMember ?
                                <h3 className="original-price" style={{fontSize: 17}}>{numberWithSpaces(isMember ? product.price : '')} Ft</h3>
                                : null
                            }

                            <h2 className="product-price" style={{fontSize: 22}}>
                                {numberWithSpaces(isMember ? Math.round(product.price * 0.9) : product.price)} Ft
                            </h2>
                        </div>
                    </Section>

                    <Section style={{gap: '10px'}}>
                        <BasketButton style={{height: 40}} product={product}>
                            Add to Basket
                        </BasketButton>

                        <WishlistButton w={200} h={40} onClick={() => dispatch(addProductToBasket(product))}>Add to wishlist</WishlistButton>
                    </Section>
                </Section>
            </ProductContainer>

        </Container>
    )
}