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
    TemplatePage,
    Wishlist
} from "./components";
import React from "react";

import "./styles/index.scss";


export default function App(){
    document.body.style.backgroundColor = '#F0F0F0';

    return (
        <Router>
            <Navigation/>
            <Header/>
            <HeaderSecondary/>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Join" element={<Join/>}/>
                <Route path="/Profile" element={<Profile/>}/>
                <Route path="/Logout" element={<><Logout/><Join/></>}/>
                <Route path="/basket" element={<Basket/>}/>
                <Route path="/product/:productTitle" element={<ProductPage/>}/>

                {/* TemplatePages */}
                <Route path="/wishlist" element={<Wishlist />}/>
                <Route path="/Books" element={<TemplatePage name={'Books'} api={'all-books'}/>}/>
                <Route path="/Films" element={<TemplatePage name={'Films'} api={'all-books'}/>}/>
                <Route path="/Songs" element={<TemplatePage name={'Songs'} api={'all-books'}/>}/>
                <Route path="/Bestsellers" element={<TemplatePage name={'Bestsellers'} api={'all-books'}/>}/>
            </Routes>

            {/*<Footer/>*/}
        </Router>
    )
}