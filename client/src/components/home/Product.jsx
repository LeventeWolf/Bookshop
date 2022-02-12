import React from "react";
import {useDispatch} from "react-redux";
import {addProductToBasket} from "../../redux/actions/basketActions";
import {
    ActionsContainer,
    BasketButton,
    DescriptionContainer,
    ProductAuthor, ProductContainer,
    ProductImage,
    ProductPrice,
    ProductTitle,
    Container, WishlistButton, Section, ProductType
} from "../Component.styles";

export default function Product( {product} ) {
    const dispatch = useDispatch();

    return (
        <Container>
            <ProductContainer>
                <ProductImage w={280} src={product.imageUrl} alt="productImage"/>

                <DescriptionContainer>
                    <Section border>
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
                <Section border style={{marginBottom: 'auto'}}>
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

function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}