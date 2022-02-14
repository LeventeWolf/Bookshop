import React from 'react'
import apiClient from '../http-common'
import {login} from "../redux/actions/userActions";

/**
 * Send userdata to server for authentication
 * @param userdata: {username, password}
 * @returns {{isAuthenticated: Promise<AxiosResponse<any>>}}
 */

export async function signin(userdata, dispatch) {
    const response = await apiClient.post(
        "/signin",
        {userdata}
    )
    if(response.data.isAuthenticated){
        dispatch(login(response.data.user))
    }
    return response.data
}

export async function register(emailRef, usernameRef, passwordRef, callback, dispatch) {
    const response = await apiClient.post('/registration', {
        email: emailRef,
        username: usernameRef,
        password: passwordRef,
    }).catch(
        err => {
            console.log(err.response.data)
            callback(() => err.response.data)
        }
    )
    if(response){
        dispatch(login({username:usernameRef, avatar:'', isMember:true}))
    }
}

export default {signin, register}