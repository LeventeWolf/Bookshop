import React, {useEffect, useState} from "react";

import {useDispatch, useSelector} from "react-redux";
import {
    ActionsContainer, BasketButton,
    Container,
    DescriptionContainer,
    Main,
    PageTitle, ProductAuthor,
    ProductContainer,
    ProductImage, ProductPrice, ProductTitle, ProductType, Section, WishlistButton
} from "../../styles/Component.styles";
import Axios from "axios";
import {numberWithSpaces, shuffleArray} from "../../lib/helper";
import {v4} from "uuid";
import '../../styles/relatedProducts.scss'
import {addProductToBasket} from "../../redux/actions/basketActions";
import {FeaturingProduct} from "../home/Featuring";


export default function ProductPage() {
    const product = useSelector(state => state.product);

    return (
        <Main>
            <div id="product-page">
                <PageTitle>Product Details</PageTitle>

                {Object.keys(product).length !== 0 ?
                    <>
                        <Product product={product}/>

                        <RelatedProducts />
                    </>
                        :
                    'Please select a product!:)'
                }
            </div>
        </Main>
    );
};

function Product( {product} ) {
    const dispatch = useDispatch();

    return (
        <Container h={'500px'}>
            <ProductContainer>
                <ProductImage w={'280px'} src={product.imageUrl} alt="productImage"/>

                <DescriptionContainer>
                    <Section borderBottom>
                        <ProductTitle fontSize='20pt'>{product.longTitle}</ProductTitle>
                    </Section>

                    <Section style={{marginBottom: 'auto', marginTop: '40px'}}>
                        <ProductType>{product.type}</ProductType>
                        <ProductAuthor>By (author): {product.author}</ProductAuthor>
                    </Section>

                    <Section style={{marginBottom: '20px'}}>
                        <ProductAuthor>{product.description}</ProductAuthor>
                    </Section>

                </DescriptionContainer>

            </ProductContainer>

            <ActionsContainer>
                <Section borderBottom style={{marginBottom: 'auto'}}>
                    <ProductPrice fontSize='22pt'>{numberWithSpaces(product.price)} Ft</ProductPrice>
                </Section>

                <Section style={{gap: '10px'}}>
                    <BasketButton w={300} h={40} onClick={() => dispatch(addProductToBasket(product))}>Add to basket</BasketButton>
                    <WishlistButton w={300} h={40} onClick={() => dispatch(addProductToBasket(product))}>Add to wishlist</WishlistButton>
                </Section>
            </ActionsContainer>
        </Container>
    )
}

function RelatedProducts() {
    const [relatedProducts, setRelatedProducts] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3001/api/all-books')
            .then(response => {
                shuffleArray(response.data);
                setRelatedProducts(response.data.splice(0, 6));
            })
            .catch(response => {
                console.log(response)
            });
    }, [])

    console.log(relatedProducts)

    return (
        <div style={{marginTop: 30}}>
            <h2 className="secondary-title">People who bought this also bought</h2>

            <div className="related-wrap">
                <div className="related-products-container">
                    {relatedProducts.map(product => <FeaturingProduct product={product} key={v4()}/>)}
                </div>
            </div>
        </div>
    )
}