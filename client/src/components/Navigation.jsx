import React from "react";
import {NavLink} from "react-router-dom";
import './navigation.scss'
import {useSelector} from "react-redux";
import {Avatar} from "@chakra-ui/react";


function Navigation() {
    const user = useSelector(state => state.user);

    return (
        <div className="nav-wrap">
            <div className="nav-primary-wrap">
                <NavLink className="nav-home" to="/">
                    <img className="nav-icon" src="https://cdn-icons-png.flaticon.com/512/25/25694.png"
                         alt="H" />
                    Home
                </NavLink>

                <NavLink className="nav-watchlist" to="/wishlist">
                    <img className="nav-icon" src="https://www.iconpacks.net/icons/1/free-heart-icon-492-thumb.png"
                         alt="<3" />
                    <span>Wishlist</span>
                </NavLink>
                {user.isLoggedIn ?
                    <NavLink className="nav-watchlist" to="/Profile">
                    Profile
                    </NavLink> :
                    ''
                }
                <NavLink className="nav-join" to="Join">

                    {!user.isLoggedIn ? <img className="nav-icon" src="http://cdn.onlinewebfonts.com/svg/img_24787.png"alt="I" /> :
                                        <Avatar name={user.username} size='sm' marginRight={5} src={user.useravatar}/>}
                    {!user.isLoggedIn ? 'Sign in/Join' : user.username}
                </NavLink>
            </div>
        </div>
    );
}

export default Navigation;