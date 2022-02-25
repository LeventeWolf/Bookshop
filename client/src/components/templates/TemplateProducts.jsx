import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {selectProduct} from "../../redux/actions/productActions";
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
    Section
} from "../../styles/Component.styles";
import WishlistButton from "./WishlistButton";


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
            <Link to={`/product/${product.id}/${product.name}`} onClick={() => dispatch(selectProduct(product))} >
                <img src={product.imageurl} className="product-image" alt="img"/>
            </Link>

            <div className="featuring-product-description-wrap">
                <Link to={`/product/${product.id}/${product.name} `} onClick={() => dispatch(selectProduct(product))} >
                    <h2 className="product-title">
                        {product.name}
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

                <BasketButton style={{backgroundColor: '#10bbd5'}} product={product}>
                    +
                </BasketButton>
            </div>
        </div>
    );
}


/**
 * M  : Medium - used for Home.jxs => Supply & Bestsellers
 */
export function ProductM ( {product} ) {
    const isMember = useSelector(state => state.user.isMember);

    return (
        <div className="supply-product">
            <Link to={`/product/${product.id}/${product.name}`} >
                <img src={product.imageurl}
                     className="supply-product-image" alt="img"/>

                <h2 className="product-title">
                    {product.name}
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
            <Link to={`/product/${product.name}`} >
                <img className='product-image' src={product.imageurl} alt="alt"/>
            </Link>

            <div className='product-description-container'>
                <Link to={`/product/${product.name}`} onClick={() => dispatch(selectProduct(product))}>
                    <h3 className="product-title">{product.name}</h3>
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
                <button className="product-remove" onClick={() => dispatch(removeProductFromBasket(product))}>
                    Remove
                </button>
            </div>
        </div>
    );
}


/**
 * W  : Wishlist - used for Wishlist.jsx
 */
export function ProductWishlist ({product} ) {
    const isMember = useSelector(state => state.user.isMember);

    return (
        <Container>
            <ProductContainer>
                <ProductImage w={'175px'} h={'230px'} src={product.imageurl} alt="productImage"/>

                <DescriptionContainer>
                    <Section borderBottom>
                        <Link to={`/product/${product.name}`} >
                            <ProductTitle style={{width: '600px'}} fontSize='18pt'>{product.name}</ProductTitle>
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

                        <WishlistButton style={{height: '40px'}} product={product} type={'remove'}>
                            Remove
                        </WishlistButton>
                    </Section>
                </Section>
            </ProductContainer>

        </Container>
    )
}


/**
 * L  : Large  - used for ProductPage.jsx
 */
export function ProductL ( {product} ) {
    const isMember = useSelector(state => state.user.isMember);

    return (
        <Container h={'500px'}>
            <ProductContainer style={{height: 400}}>
                <ProductImage w={'280px'} src={product.imageurl} alt="productImage"/>

                <DescriptionContainer>
                    <Section borderBottom>
                        <ProductTitle fontSize='20pt'>{product.name}</ProductTitle>
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

                     <WishlistButton style={{height: '40px'}} product={product} >
                         Add to wishlist
                     </WishlistButton>
                </Section>
            </ActionsContainer>
        </Container>
    )
}


/**
 * T  : Template  - used for TemplatePages (Bestsellers, Songs, Films, Books, Wishlist)
 */
export function ProductTemplate({product} ) {
    const isMember = useSelector(state => state.user.isMember);

    return (
        <Container>
            <ProductContainer>
                <ProductImage h={'190px'} src={product.imageurl} alt="productImage"/>

                <DescriptionContainer style={{width: '500px'}}>
                    <Section borderBottom>
                        <Link to={`/product/${product.name}`} >
                            <ProductTitle fontSize='18pt'>{product.name}</ProductTitle>
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
                                <h3 className="original-price" style={{fontSize: 17}}>{numberWithSpaces(product.price)} Ft</h3>
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

                        <WishlistButton style={{height: '40px'}} product={product}>
                            Add to wishlist
                        </WishlistButton>
                    </Section>
                </Section>
            </ProductContainer>

        </Container>
    )
}
