import React from 'react'

import {Main, PageTitle} from "../../styles/Component.styles";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

function Profile(){
    const user = useSelector(state => state.user);
    const navigate = useNavigate();

    if (!user.isLoggedIn) {
        console.log('Should be navigating???');
        navigate('/Join');
    }

    return (
        <Main>
            <PageTitle>Profile</PageTitle>

            <h2>Username: {user.username}</h2>
            <h2>Avatar: {user.avatar}</h2>
        </Main>


    );

}

export default Profile