import React, {useRef, useState} from "react";
import {
    Box,
    Input,
    ButtonGroup,
    Text,
    InputGroup,
    InputLeftElement,
    Button
} from '@chakra-ui/react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {useDispatch, useSelector} from "react-redux";
import {signin} from '../../api/UserAPI';
import { Progress } from '@chakra-ui/react'
import {useQuery} from "react-query";
import {Navigate} from "react-router-dom";
import {useAlert} from "react-alert";

export function Signin() {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const alert = useAlert()
    const submitClicked = useRef();
    const [userdata, setUserdata] = useState({name: '', password: ''})
    const [passwordVisible, setPasswordVisible] = useState(false);
    const {isLoading, data : status, refetch: authenticate, isError, isSuccess, isStale} = useQuery('signin', async () => await signin(userdata, dispatch), {enabled: false, refetchOnWindowFocus:false});

    if(isLoading) return (<Text><Progress size='xs' isIndeterminate /></Text>)
    if(isError) return (<Text>Error occured</Text>)

    const showPassword = () => setPasswordVisible(!passwordVisible);

    const handleChange = event => {
        const {name, value} = event.target;
        setUserdata(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    if (isLoading) {
        console.log('Loading!')
    }

    if (isError) {
        alert.error('Wrong username or password!');
        console.log('X USERNAME OR PASSORD X')
    }
    if(isSuccess && user.isLoggedIn){
        alert.success('Login successful');
        console.log('LOGIN OK')
    }


    return (
        <Box margin={50}>
            <Text fontSize='2xl' mb={35} ml={2}>Sign in</Text>
            <InputGroup id="Username" mb={2}>
                <InputLeftElement ml={3} mr={1} children={
                    <FontAwesomeIcon icon={faUser} color='gray'/>}/>
                <Input
                    bgColor='white'
                    mx='3'
                    variant="outline"
                    placeholder='Username'
                    w="100%"
                    borderColor='grey.300'
                    value={userdata.name}
                    type='text'
                    name='name'
                    onChange={handleChange}
                />
            </InputGroup>
            <InputGroup id="Password" mb={2}>
                <InputLeftElement ml={3} mr={1}
                                  children={<Button variant='subtle' size="xs" h="full" onClick={showPassword} tabIndex={-1}>
                                      {passwordVisible ?
                                          <img className="pwd-eye" src="https://cdn-icons-png.flaticon.com/512/159/159078.png" alt={'Show'}/>
                                          :
                                          <img className="pwd-eye" src="https://www.pngkey.com/png/full/926-9265778_png-file-svg-eye-on-off-icon.png" alt={'Hide'}/>
                                      }
                                  </Button>}/>
                <Input
                    bgColor='white'
                    mx='3'
                    variant="outline"
                    type={passwordVisible ? "text" : "password"}
                    placeholder='Password'
                    w="100%"
                    borderColor='grey.300'
                    name='password'
                    value={userdata.password}
                    onChange={handleChange}
                />
            </InputGroup>
            <ButtonGroup variant="solid" spacing='6'>
                <Button color='blue.300' mt={15} onClick={authenticate}>
                    Sign in
                    {user.isLoggedIn ? <Navigate to="/" /> : ''}
                </Button>
            </ButtonGroup>
        </Box>
    )
}