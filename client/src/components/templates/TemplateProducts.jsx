import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {select} from "../../redux/actions/productActions";
import {numberWithSpaces} from "../../lib/helper";
import BasketButton from "./BasketButton";
import React from "react";
import {addProductToBasket, removeProductFromBasket} from "../../redux/actions/basketActions";
import {
    ActionsContainer,
    Container,
    DescriptionContainer, ProductAuthor,
    ProductContainer,
    ProductImage,
    ProductTitle, ProductType,
    Section, WishlistButton
} from "../../styles/Component.styles";


/**
 * Naming conventions
 * SM : Small - used for Featuring, Related products
 * M  : Medium - used for Supply & Bestsellers
 * L  : Large  - used for TemplatePage (Songs, Films, Music, etc...)
 */


/**
 * SM : Small - used for Featuring, Related products
 */
export function ProductSM ( {product} ) {
    const dispatch = useDispatch();
    const isMember = useSelector(state => state.user.isMember);

    return (
        <div className="featuring-product">
            <Link to={`/product/${product.title}`} onClick={() => dispatch(select(product))}>
                <img src={product.imageUrl} className="product-image" alt="img"/>
            </Link>

            <div className="featuring-product-description-wrap">
                <Link to={`/product/${product.title}`} onClick={() => dispatch(select(product))}>
                    <h2 className="product-title">
                        {product.title}
                    </h2>
                </Link>

                <h2 className="product-author">
                    {product.author}
                </h2>

                <div className="price-container">
                    {isMember ?
                        <h3 className="original-price">{numberWithSpaces(isMember ? product.price : '')} Ft</h3>
                        : null
                    }

                    <h2 className="product-price">
                        {numberWithSpaces(isMember ? Math.round(product.price * 0.9) : product.price)} Ft
                    </h2>
                </div>

                <button className="product-basket-btn"
                        onClick={() => dispatch(addProductToBasket(product))}>
                    +
                </button>
            </div>
        </div>
    );
}


/**
 * M  : Medium - used for Supply & Bestsellers
 */
export function ProductM ( {product} ) {
    const dispatch = useDispatch();
    const isMember = useSelector(state => state.user.isMember);

    return (
        <div className="supply-product">
            <Link to={`/product/${product.title}`} onClick={() => dispatch(select(product))}>
                <img src={product.imageUrl}
                     className="supply-product-image" alt="img"/>

                <h2 className="product-title">
                    {product.title}
                </h2>
            </Link>

            <h2 className="product-author">
                {product.author}
            </h2>

            <div className="price-container">
                {isMember ?
                    <h3 className="original-price">{numberWithSpaces(isMember ? product.price : '')} Ft</h3>
                    : null
                }

                <h2 className="product-price">
                    {numberWithSpaces(isMember ? Math.round(product.price * 0.9) : product.price)} Ft
                </h2>
            </div>

            <BasketButton style={{width:'100%', height: '37px', marginTop: 10, backgroundColor: '#10bbd5'}} product={product}>
                Add to Basket
            </BasketButton>
        </div>
    );
}

/**
 * B  : Basket - used for Basket
 */
export function ProductB ( {product} ) {
    const dispatch = useDispatch();
    const isMember = useSelector(state => state.user.isMember);

    return (
        <div className="basket-product-wrap">
            <Link to={`/product/${product.title}`} onClick={() => dispatch(select(product))}>
                <img className='product-image' src={product.imageUrl} alt="alt"/>
            </Link>

            <div className='product-description-container'>
                <Link to={`/product/${product.title}`} onClick={() => dispatch(select(product))}>
                    <h3 className="product-title">{product.title}</h3>
                </Link>

                <h4 className="product-author">{product.author}</h4>
                <div className="price-container">
                    {isMember ?
                        <h3 className="original-price">{numberWithSpaces(isMember ? product.price : '')} Ft</h3>
                        : null
                    }

                    <h2 className="product-price">
                        {numberWithSpaces(isMember ? Math.round(product.price * 0.9) : product.price)} Ft
                    </h2>
                </div>
            </div>

            <div className="product-actions-container">
                <div className="quantity-wrap">
                    <span>Quantity: {product.quantity}</span>
                    <button className="product-quantity" onClick={() => dispatch(addProductToBasket(product))}>
                        +
                    </button>
                </div>
                <h3 className="product-price">{numberWithSpaces(isMember ? product.quantity * Math.round(product.price * 0.9) : product.quantity * product.price)} Ft</h3>
                <button className="product-remove" onClick={() => dispatch(removeProductFromBasket(product.title))}>
                    Remove
                </button>
            </div>
        </div>
    );
}


/**
 * L  : Large  - used for TemplatePage (Songs, Films, Music, etc...)
 */
export function ProductL ( {product} ) {
    const dispatch = useDispatch();
    const isMember = useSelector(state => state.user.isMember);


    return (
        <Container h={'500px'}>
            <ProductContainer style={{height: 400}}>
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

            <ActionsContainer style={{width: 400, marginLeft: 'auto'}}>
                <Section borderBottom style={{marginBottom: 'auto'}}>
                    <div className="price-container-row">
                        {isMember ?
                            <h3 className="original-price" style={{fontSize: 17}}>{numberWithSpaces(isMember ? product.price : '')} Ft</h3>
                            : null
                        }

                        <h2 className="product-price" style={{fontSize: 25}}>
                            {numberWithSpaces(isMember ? Math.round(product.price * 0.9) : product.price)} Ft
                        </h2>
                    </div>
                </Section>

                <Section style={{gap: '10px'}}>
                    <BasketButton style={{width:'300px', height: '40px'}} product={product}>
                        Add to Basket
                    </BasketButton>
                    <WishlistButton w={300} h={40} onClick={() => dispatch(addProductToBasket(product))}>Add to wishlist</WishlistButton>
                </Section>
            </ActionsContainer>
        </Container>
    )
}
