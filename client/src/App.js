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

document.body.style.backgroundColor = '#F0F0F0';


export default function App(){
    const dispatch = useDispatch();

    function loadCachedUser() {
        if (localStorage.key('login')) {
            console.log('logged in!');
            const user = JSON.parse(localStorage.login);
            dispatch(login(user))
        }
    }

    useEffect(() => {
        loadCachedUser();
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