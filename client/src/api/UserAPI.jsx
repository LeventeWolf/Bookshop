import apiClient from '../http-common'

/**
 * Send userdata to server for authentication
 * @param userdata: {username, password}
 * @returns {Promise<AxiosResponse<any>>}
 */
export function signin(userdata) {
    return apiClient.post('/signin', {userdata})
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