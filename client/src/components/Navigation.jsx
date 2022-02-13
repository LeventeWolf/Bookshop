import React from "react";
import {NavLink} from "react-router-dom";
import '../styles/navigation.scss'
import {useDispatch, useSelector} from "react-redux";
import {Avatar, Link} from "@chakra-ui/react";
import {logout} from "../redux/actions/userActions";
import {useAlert} from "react-alert";
import profilePlaceHolder from '../assets/profile-placeholder.png'

function Navigation() {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const alert = useAlert();

    function handleLogout() {
        dispatch(logout());
        alert.success('Logout successful!');
    }

    return (
        <div className="nav-wrap">
            <div className="nav-primary-wrap">
                <NavLink className="nav-home" to="/">
                    <img className="nav-icon" src="https://cdn-icons-png.flaticon.com/512/25/25694.png"
                         alt="H"/>
                    Home
                </NavLink>

                <NavLink className="nav-watchlist" to="/wishlist">
                    <img className="nav-icon" src="https://www.iconpacks.net/icons/1/free-heart-icon-492-thumb.png"
                         alt="<3"/>
                    <span>Wishlist</span>
                </NavLink>
                {user.isLoggedIn ?
                    <>
                        <NavLink className="nav-profile" to="/Profile">
                            <Avatar name={user.username} size={"xs"} marginRight={2} src={'./Avatars/' + user.avatar}/>
                            Profile
                            {user.isMember ? <img className="nav-icon member-star" src="http://simpleicon.com/wp-content/uploads/star.png" alt="#" />
                                : null
                            }
                        </NavLink>
                        <NavLink to={'#'} className="nav-profile" onClick={handleLogout}>
                            <img className="nav-icon" src="https://icons-for-free.com/iconfiles/png/512/logout-1324760598547500271.png"
                                 alt="<-" />
                             Logout
                        </NavLink>

                    </>
                    :
                    <NavLink className="nav-join" to="Join">
                        <img className="nav-icon" src={profilePlaceHolder} alt="I"/>
                        Sign in/Join
                    </NavLink>
                }
            </div>
        </div>
    );
}

export default Navigation;