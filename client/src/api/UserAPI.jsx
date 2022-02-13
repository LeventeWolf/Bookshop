import React from 'react'
import apiClient from '../http-common'
import {login} from "../redux/actions/userActions";

/**
 * Send userdata to server for authentication
 * @param userdata: {username, password}
 * @returns {{isAuthenticated: Promise<AxiosResponse<any>>}}
 */

export async function signin(userdata, dispatch) {
    await apiClient.post(
        "/signin",
        {userdata}
    ).then(response => {
        if (response.data.isAuthenticated) {
            dispatch(login(response.data.user))
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