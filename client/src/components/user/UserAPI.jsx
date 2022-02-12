import Axios from 'axios'

export async function signin(userdata) {
    console.log(userdata)
    await Axios.post('http://localhost:3001/signin', {userdata})
}

export async function register(emailRef, usernameRef, passwordRef, callback) {
    console.log(usernameRef)
    await Axios.post('http://localhost:3001/registration', {
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



export default {signin, register}