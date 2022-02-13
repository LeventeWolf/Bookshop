import React from "react";
import ReactDOM from "react-dom";
import {ChakraProvider} from '@chakra-ui/react'
import {Provider} from 'react-redux';
import {QueryClient, QueryClientProvider} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";
import store from './redux/store'
import App from "./App";


const queryClient = new QueryClient({
    defaultOptions:{
        queries:{
            refetchOnMount: false,
            refetchOnReconnect: false,
            refetchOnWindowFocus: false,
            retry:false
        }
    }
})

ReactDOM.render(
    <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <Provider store={store}>
            <ChakraProvider>
               <App />
            </ChakraProvider>
        </Provider>
    </QueryClientProvider>,


    document.getElementById("root")
);
