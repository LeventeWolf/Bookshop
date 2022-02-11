import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Navigation, Header, HeaderSecondary, Footer, Home, Join, Basket, Wishlist} from "./components";
import {ChakraProvider} from '@chakra-ui/react'

import {Provider} from 'react-redux';
import store from './redux/store'

document.body.style.backgroundColor = '#F0F0F0';

ReactDOM.render(
    <Provider store={store}>
        <ChakraProvider>
            <Router>
                <Navigation/>
                <Header/>
                <HeaderSecondary/>

                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/join" element={<Join/>}/>
                    <Route path="/wishlist" element={<Wishlist/>}/>
                    <Route path="/basket" element={<Basket/>}/>
                </Routes>

                <Footer/>
            </Router>
        </ChakraProvider>
    </Provider>,


    document.getElementById("root")
);
