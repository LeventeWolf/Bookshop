import React from "react";
import {NavLink} from "react-router-dom";
import './navigation.scss'


function Navigation() {
    return (
        <div className="nav-wrap">
            <div className="nav-primary-wrap">
                <NavLink className="nav-home" to="/">
                    <img className="nav-icon" src="https://cdn-icons-png.flaticon.com/512/25/25694.png"
                         alt="H" />
                    Home
                </NavLink>

                <NavLink className="nav-watchlist" to="/watchlist">
                    <img className="nav-icon" src="https://www.iconpacks.net/icons/1/free-heart-icon-492-thumb.png"
                         alt="<3" />
                    <span>Wishlist</span>
                </NavLink>

                <NavLink className="nav-join" to="/join">
                    <img className="nav-icon" src="http://cdn.onlinewebfonts.com/svg/img_24787.png"
                         alt="I" />
                    Sign in/Join
                </NavLink>
            </div>
        </div>
    );
}

export default Navigation;