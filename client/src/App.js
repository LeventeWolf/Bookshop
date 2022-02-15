import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {
    Basket,
    Footer,
    Header,
    HeaderSecondary,
    Home,
    Logout,
    Join,
    Navigation,
    ProductPage,
    Profile,
    TemplatePage
} from "./components";
import React, {useEffect} from "react";

import "./styles/index.scss";
import {login} from "./redux/actions/userActions";
import {useDispatch} from "react-redux";
import {addProductToBasket} from "./redux/actions/basketActions";

document.body.style.backgroundColor = '#F0F0F0';


export default function App(){
    const dispatch = useDispatch();

    function loadCachedUser() {
        if (localStorage.login === undefined) return;

        const user = JSON.parse(localStorage.login);
        dispatch(login(user))
    }

    function loadCachedBasket() {
        if (localStorage.basket === undefined) return;
        
        const basketProducts = JSON.parse(localStorage.basket);
        basketProducts.forEach(product => dispatch(addProductToBasket(product)))
    }

    useEffect(() => {
        loadCachedUser();
        loadCachedBasket();
    }, [])


    return (
        <Router>
            <Navigation/>
            <Header/>
            <HeaderSecondary/>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Join" element={<Join/>}/>
                <Route path="/wishlist" element={<TemplatePage name={'Wishlist'}/>}/>
                <Route path="/basket" element={<Basket/>}/>
                <Route path="/product/:productName" element={<ProductPage/>}/>
                <Route path="/Profile" element={<Profile/>}/>
                <Route path="/Books" element={<TemplatePage name={'Books'}/>}/>
                <Route path="/Films" element={<TemplatePage name={'Films'}/>}/>
                <Route path="/Logout" element={<><Logout/><Join/></>}/>
                <Route path="/Songs" element={<TemplatePage name={'Songs'}/>}/>
                <Route path="/Bestsellers" element={<TemplatePage name={'Bestsellers'}/>}/>
            </Routes>

            {/*<Footer/>*/}
        </Router>
    )
}