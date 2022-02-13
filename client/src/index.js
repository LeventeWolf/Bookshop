import React from "react";
import ReactDOM from "react-dom";
import {ChakraProvider} from '@chakra-ui/react'
import {Provider} from 'react-redux';
import {QueryClient, QueryClientProvider} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";
import AlertTemplate from 'react-alert-template-basic'
import {transitions, positions, Provider as AlertProvider} from 'react-alert'
import store from './redux/store'
import App from "./App";

const alertOptions = {
    position: positions.BOTTOM_RIGHT,
    timeout: 5000,
    offset: '5px',
    transition: transitions.FADE
}

const queryClient = new QueryClient({
    defaultOptions:{
        queries:{
            // refetchOnMount: false,
            // refetchOnReconnect: false,
            // refetchOnWindowFocus: false,
            // retry:false
        }
    }
})

ReactDOM.render(
    <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <Provider store={store}>
            <ChakraProvider>
                <AlertProvider template={AlertTemplate} {...alertOptions}>
                    <App />
                </AlertProvider>
            </ChakraProvider>
        </Provider>
    </QueryClientProvider>,


    document.getElementById("root")
);
