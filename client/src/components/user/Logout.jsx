import React from 'react'
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {logout} from "../../redux/actions/userActions";
import {Text} from "@chakra-ui/react";
import {Navigate} from "react-router-dom";

export default function Logout() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(logout())
    }, [dispatch])

    return (
        <>
            <Text>You are successfully longed out!</Text>
            <Navigate to="/Join"/>
        </>
    )
}