import apiClient from '../../http-common'

export async function signin(userdata) {
    await apiClient.post('/signin', {userdata})
}

export async function register(emailRef, usernameRef, passwordRef, callback) {
    await apiClient.post('/registration', {
        email: emailRef,
        username: usernameRef,
        password: passwordRef,
    }).then(response => {
        console.log('Successful registration!');
        console.log(response)
    }).catch(response => {
        callback({username: true, password: true, email: true})
        console.log(`Error: ${response}`)
    });
}

export async function getUserData(username){

}


export default {signin, register}