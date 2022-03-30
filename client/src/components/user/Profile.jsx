import React, {useEffect, useState} from 'react'

import {Main, PageTitle} from "../../styles/Component.styles";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

import "./profile.scss"
import Axios from "axios";

const defaultUserInfo = {
    client: {
        email: '',
        firstname: '',
        lastname: '',
        username: '',
    },
    card: {
        cvc: 0,
        expiration_date: '0',
        name: '',
    },
    address: {
        city: '',
        house_number: 0,
        street: '',
        zipcode: 0,
    }
};


function Profile() {
    const user = useSelector(state => state.user);
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState(defaultUserInfo);
    const [purchases, setPurchases] = useState([]);

    if (!user.isLoggedIn) {
        console.log('Should be navigating???');
        navigate('/Join');
    }

    useEffect(() => {
        Axios.post(`http://localhost:3001/api/profile`, {username: user.username}).then((response) => {
            console.log(response.data)
            setUserInfo(response.data)
        }).catch((response) => {
            console.log(`[Profile] ERROR!`);
            console.log(response)
        });


    }, []);

    return (
        <Main>
            <div className="profile">
                <span>
                    <h1>Profile Info</h1>
                    <hr/>
                </span>


                <div className="client-data-container">
                    <img className="profile-picture" src="/Avatars/Wolf.jfif" alt="profile-pic"/>

                    <div className="client-info-container">
                        <h2>User info</h2>
                        <h3>Username: {userInfo.client.username}</h3>
                        <h3>Avatar: {user.avatar}</h3>
                        <h3>First Name: {userInfo.client.firstname} </h3>
                        <h3>Last Name: {userInfo.client.lastname} </h3>

                    </div>
                </div>

                <div className="address-container">
                    <h2>Address Info</h2>
                    <h3>&nbsp;Zipcode: {userInfo.address.zipcode}</h3>
                    <h3>&nbsp;City: {userInfo.address.city}</h3>
                    <h3>&nbsp;House number: {userInfo.address.house_number}  {userInfo.address.street}.</h3>
                </div>

                <div className="credit-card-container">
                    <h2>Credit Card Info</h2>
                    <h3>&nbsp;Card number: {userInfo.card.name}</h3>
                    <h3>&nbsp;Owner: {userInfo.client.firstname} {userInfo.client.lastname}</h3>
                    <h3>&nbsp;CVC: ***</h3>
                </div>

                <div className="purchases-info-container">
                    <h2>Purchases</h2>
                    {purchases.map(pInfo => <Purchase purchaseInfo={pInfo} />)}
                </div>
            </div>
        </Main>
    );
}

const Purchase = ({purchaseInfo}) => {
    return (
        <div className="purchase">
            <h2>date: {purchaseInfo.date}</h2>
            <h2>sum: </h2>

            <h2>products: {purchaseInfo.date}</h2>
        </div>
    )
}

export default Profile