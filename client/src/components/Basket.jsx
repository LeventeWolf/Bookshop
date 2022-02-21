import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {v4} from "uuid";

import '../styles/basket.scss'
import {ButtonStyle, Main, PageTitle} from "../styles/Component.styles";
import {numberWithSpaces} from "../lib/helper";
import styled from "styled-components";
import {useAlert} from "react-alert";
import {checkout, handleCheckoutAction} from "../redux/actions/basketActions";
import {useNavigate} from "react-router-dom";
import {setBoughtAmount, updateMember} from "../redux/actions/userActions";
import {ProductB} from "./templates/TemplateProducts";

const BasketDetails = styled.div`
  padding: 10px;
  letter-spacing: 0;

`;

const BasketDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function Basket() {
    const dispatch = useDispatch();
    const alert = useAlert();
    const navigate = useNavigate();
    const basket = useSelector(state => state.basket)
    const user = useSelector(state => state.user)

    let productsNum = 0;
    let sum = 0;

    basket.forEach(product => {
        productsNum += product.quantity;
        if (user.isMember) {
            sum += product.quantity * Math.round(product.price * 0.9);
        } else {
            sum += product.quantity * product.price;
        }
    })

    useEffect(() => {
        document.title = "Your basket"
    }, []);


    async function handleCheckout() {
        if (!user.isLoggedIn) {
            navigate('/join')
            alert.error('You have to be an user to buy products!');
            return;
        }

        dispatch(handleCheckoutAction(user.username, basket));
        dispatch(setBoughtAmount(user.boughtAmount + productsNum))
        dispatch(updateMember());

        alert.success('Checkout successful!');
    }


    return (
        <Main>
            <PageTitle>Your basket</PageTitle>

            <div className="basket-page-wrap">
                {basket.length !== 0 ?
                    <BasketDetailsContainer>
                        <BasketDetails>
                            <img src="https://image.flaticon.com/icons/png/512/68/68892.png" alt={'basket'}
                                 style={{width: '20px', display: 'inline', marginRight: 5, marginBottom: 6}}/>
                            <span>
                                 You have {productsNum} item{productsNum === 1 ? '' : 's'} for a total of <b>{numberWithSpaces(sum)}</b> Ft in your basket.
                            </span>
                        </BasketDetails>

                        <ButtonStyle style={{width: 200, height: 40}} onClick={handleCheckout}>
                            Checkout
                        </ButtonStyle>
                    </BasketDetailsContainer>
                    :
                    <div className="basket-empty">Your basket is empty!</div>
                }

                <div className="basket-page-container">
                    {basket.length !== 0 ?
                        basket.map(product => <ProductB product={product} key={v4()}/>)
                        :
                        null
                    }
                </div>
            </div>
        </Main>

    )
}
