import React from 'react'
import apiClient from '../http-common'
import {login} from "../redux/actions/userActions";
import {Navigate} from 'react-router-dom'

/**
 * Send userdata to server for authentication
 * @param userdata: {username, password}
 * @returns {{isAuthenticated: Promise<AxiosResponse<any>>}}
 */

export function signin(userdata, dispatch) {
    console.log('signing in!')

    apiClient.post(
        "/signin",
        {userdata}
    ).then(response => {
        if (response.data.isAuthenticated) {
            const user = response.data.user;

            console.log(`user: ${JSON.stringify(user)}`);
            dispatch(login(user))

            return true;
        } else {
            console.log(`[SIGN-IN] Wrong Username or password!`);
            return false;
        }
    }).catch(response => {
        console.log(`[SIGN-IN] Error: ${response}`)
        return false;
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