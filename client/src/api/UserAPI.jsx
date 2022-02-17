import React from 'react'
import apiClient from '../http-common'
import {loginError, loginLoading, loginSuccess} from "../redux/actions/userActions";

export const signin = (userData) => async dispatch => {
        await apiClient.post("/signin", {userData}).then(res => {
            dispatch(loginLoading())
            if (res.data.isAuthenticated){
                console.log(res)
                dispatch(loginSuccess(res.data.user))
                return true
            }
            })
            .catch(error => dispatch(loginError(error.message)));

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
        dispatch(loginSuccess({username:usernameRef, avatar:'', isMember:true}))
    }
}

export async function getUserData(username){
    return await apiClient.post('/userdata', {username})
}

export default {signin, register}