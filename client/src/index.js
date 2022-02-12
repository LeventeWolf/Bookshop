import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Navigation, Header, HeaderSecondary, Footer, Home, Join, Basket, Wishlist, ProductPage} from "./components";
import {ChakraProvider} from '@chakra-ui/react'

import {Provider} from 'react-redux';
import store from './redux/store'
import {QueryClient, QueryClientProvider} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";

document.body.style.backgroundColor = '#F0F0F0';

const queryClient = new QueryClient()

ReactDOM.render(
    <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools />
    <Provider store={store}>
        <ChakraProvider>
            <Router>
                <Navigation/>
                <Header/>
                <HeaderSecondary/>

                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/Join" element={<Join/>}/>
                    <Route path="/wishlist" element={<Wishlist/>}/>
                    <Route path="/basket" element={<Basket/>}/>
                    <Route path="/product/:productName" element={<ProductPage/>}/>
                </Routes>

                <Footer/>
            </Router>
        </ChakraProvider>
    </Provider>
    </QueryClientProvider>,


    document.getElementById("root")
);
