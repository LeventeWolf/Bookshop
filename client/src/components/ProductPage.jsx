import React, {useEffect, useState} from "react";
import {v4} from "uuid";
import Axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {shuffleArray} from "../lib/helper";
import {Main, PageTitle, Wrapper} from "../styles/Component.styles";
import '../styles/relatedProducts.scss'
import {ProductEditL, ProductL, ProductSM} from "./templates/TemplateProducts";
import {
    fetchProduct,
    removeSelectedProduct,
} from "../redux/actions/productActions";
import {useParams} from "react-router-dom";
import {initialUser} from "../model/user";
import {getUserData} from "../api/userAPI";


export default function ProductPage() {
    const [myUser, setMyUser] = useState(initialUser);
    const user = useSelector(state => state.user);
    const product = useSelector(state => state.product);
    const [isEdit, setIsEdit] = useState(false)
    const dispatch = useDispatch();

    useEffect( () => {
        getUserData(user.username)
            .then(response => {
                setMyUser(response.data);
            })
            .catch(error => {
                console.error(`[USER-DATA] Error while fetching user data`);
                console.error(error);
            });
    }, [])

    const {id} = useParams();
    const {productTitle} = useParams();

    useEffect(() => {
        dispatch(fetchProduct(id, productTitle));

        return () => {
            dispatch(removeSelectedProduct())
        };
    }, [dispatch, id, productTitle]);


    function toggleEditMode() {
        if (isEdit) {
            setIsEdit(false);
        } else {
            setIsEdit(true);
        }
    }

    if (isEdit) {
        return (
            <Main>
                <div id="product-page">
                    <Wrapper onClick={toggleEditMode} >
                        <PageTitle>Edit Product</PageTitle>
                        <img style={{height: '2em', cursor: 'pointer'}}
                             src="https://upload.wikimedia.org/wikipedia/commons/6/64/Edit_icon_%28the_Noun_Project_30184%29.svg"
                             alt="edit"/>
                    </Wrapper>

                    {Object.keys(product).length !== 0 ?
                        <>
                            <ProductEditL product={product}/>

                            <RelatedProducts/>
                        </>
                        :
                        '404 Product Not Found!'
                    }
                </div>
            </Main>
        );
    }



    return (
        <Main>
            <div id="product-page">
                {myUser.IS_ADMIN === 0 ?
                    <PageTitle>Product Details</PageTitle> :
                    <Wrapper onClick={toggleEditMode}>
                        <PageTitle>Product Details</PageTitle>
                        <img style={{height: '2em', cursor: 'pointer'}}
                             src="https://upload.wikimedia.org/wikipedia/commons/6/64/Edit_icon_%28the_Noun_Project_30184%29.svg"
                             alt="edit"/>
                    </Wrapper>
                }


                {Object.keys(product).length !== 0 ?
                    <>
                        <ProductL product={product}/>

                        <RelatedProducts productID={product.id}/>
                    </>
                    :
                    '404 Product Not Found!'
                }
            </div>
        </Main>
    );

};


function RelatedProducts( {productID} ) {
    const [relatedProducts, setRelatedProducts] = useState([]);

    useEffect(() => {
        Axios.get(`http://localhost:3001/api/related-products/${productID}`)
            .then(response => {
                shuffleArray(response.data);
                setRelatedProducts(response.data.splice(0, 6));
            })
            .catch(response => {
                console.log(response)
            });
    }, [])

    return (
        <div style={{marginTop: 30}}>
            <h2 className="secondary-title">People who bought this also bought</h2>

            <div className="related-wrap">
                <div className="related-products-container">
                    {relatedProducts.map(product => <ProductSM product={product} key={v4()}/>)}
                </div>
            </div>
        </div>
    )
}