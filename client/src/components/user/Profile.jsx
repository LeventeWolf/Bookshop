import React from 'react'

import {Main, PageTitle} from "../../styles/Component.styles";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

import "./profile.scss"

function Profile(){
    const user = useSelector(state => state.user);
    const navigate = useNavigate();

    if (!user.isLoggedIn) {
        console.log('Should be navigating???');
        navigate('/Join');
    }

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
                        <h3>Username: {user.username}</h3>
                        <h3>Avatar: {user.avatar}</h3>
                    </div>
                </div>

                <div className="address-container">
                    <h2>Address Info</h2>
                    <h3>&nbsp;City: Szeged</h3>
                    <h3>&nbsp;Address: Kiss u. 12</h3>
                </div>

                <div className="credit-card-container">
                    <h2>Credit Card Info</h2>
                    <h3>&nbsp;Card number: 1234 5678 9100 1234</h3>
                    <h3>&nbsp;Name: Wolf Levente</h3>
                </div>
            </div>
        </Main>


    );

}

export default Profile