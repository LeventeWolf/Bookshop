import React from 'react'
import apiClient from '../http-common'
import {login} from "../redux/actions/userActions";

/**
 * Send userdata to server for authentication
 * @param userdata: {username, password}
 * @returns {Promise<AxiosResponse<any>>}
 */

export function signin(userdata, dispatch) {
    const auth = apiClient.post("/signin", {userdata}).then((response) => {
        if(response.data.isAuthenticated) {
            dispatch(login({
                username: userdata.name,
                useravatar: './Avatars/Wolf.jfif'
            }))
        }
    })
}

export function register(emailRef, usernameRef, passwordRef, callback) {
    apiClient.post('/registration', {
        email: emailRef,
        username: usernameRef,
        password: passwordRef,
    }).then(response => {
        console.log('Successful registration!');
    }).catch(response => {
        callback({username: true, password: true, email: true})
        console.log(`Error: ${response}`)
    });
}

export default {signin, register}