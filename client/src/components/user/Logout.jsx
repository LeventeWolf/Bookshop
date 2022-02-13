import React from 'react'
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {logout} from "../../redux/actions/userActions";
import {Text} from "@chakra-ui/react";
import {Navigate} from "react-router-dom";

export default function Logout(){
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(logout())
    }, [])

    return(
        <>
            <Text>You are succesfully loged out</Text>
            <Navigate to="/Join" />
        </>
    )
}