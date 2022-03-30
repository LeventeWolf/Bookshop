import React, {useEffect, useState} from 'react'

import {Main, PageTitle} from "../../styles/Component.styles";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

import "./profile.scss"
import Axios from "axios";
import v4 from "uuid/v4";

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


        Axios.post(`http://localhost:3001/api/purchases`, {username: user.username}).then((response) => {
            console.log(response.data)
            setPurchases(response.data)
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
                    <h3>&nbsp;House number: {userInfo.address.street} {userInfo.address.house_number}.</h3>
                </div>

                <div className="credit-card-container">
                    <h2>Credit Card Info</h2>
                    <h3>&nbsp;Card number: {userInfo.card.name}</h3>
                    <h3>&nbsp;Owner: {userInfo.client.firstname} {userInfo.client.lastname}</h3>
                    <h3>&nbsp;CVC: ***</h3>
                </div>

                <div className="purchases-info-container">
                    <h2>Purchases</h2>
                    <div className="purchases-container">
                        {purchases.map(pInfo => <Purchase key={v4()} purchaseInfo={pInfo}/>)}
                    </div>
                </div>
            </div>
        </Main>
    );
}

const Purchase = ({purchaseInfo}) => {
    function formatDate(date) {
        let splitDate = date.split("T");
        splitDate[1] = splitDate[1].replace(".000Z", "");

        return `${splitDate[0]} ${splitDate[1]}`;
    }

    return (
        <div className="purchases-wrap">
            <h3><b>date:</b> {formatDate(purchaseInfo.ddate)}</h3>
            <h3><b>products</b></h3>
            <div className="products-container">
                <table className="table table-light">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>ID</th>
                        <th>ID</th>
                        <th>ID</th>
                    </tr>
                    </thead>
                    <tbody>
                         {purchaseInfo.products.map(p => <Product key={v4()} productInfo={p}/>)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

const Product = ({productInfo}) => {
    return (
        <tr>
            <td>{productInfo.id}</td>
            <td>{productInfo.id}</td>
            <td>{productInfo.id}</td>
            <td>{productInfo.id}</td>
        </tr>
    )
}

export default Profile