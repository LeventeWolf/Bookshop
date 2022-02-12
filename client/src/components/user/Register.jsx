import React, {useState, useRef} from "react";
import {FormControl, Box, Input, ButtonGroup, Text, InputGroup, InputLeftElement, Button } from '@chakra-ui/react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser, faAt} from '@fortawesome/free-solid-svg-icons'
import {login} from "../../redux/actions/userActions";
import {motion} from 'framer-motion';
import {register, signin} from './UserAPI'
import {useQuery} from "react-query";
import {useDispatch} from "react-redux";

export function Register() {
    const dispatch = useDispatch()
    const [errors, setErrors] = useState({username: false, password: false, email: false});
    const [passwordVisible, setPasswordVisible] = useState(false);
    const showPassword = () => setPasswordVisible(!passwordVisible);

    const [validtext, isValidText] = useState(false)
    const emailRef = useRef('');
    const usernameRef = useRef('');
    const passwordRef = useRef('');

    const { data, isLoading, error, refetch } = useQuery('register', register(emailRef.current.value, usernameRef.current.value, passwordRef.current.value, setErrors)
        , {enabled: false});


    const checkTextValidity = (text) => {
        const textLength = text.length;
        const numbersInText = text.split().filter(charachter => '0' <= charachter <= '9').reduce((next, curr) => {return curr + next}, 0).length;
        const isFirstElementCapital = textLength > 0 && text[0] === text[0].toUpperCase() && Boolean(text[0].match(/[A-Z]/));
        if(textLength > 6 && numbersInText && isFirstElementCapital){
            isValidText(() => true)
        }else{
            isValidText(() => false)
        }
    }

    function handleSubmit() {
        if(validtext){
            refetch();
            dispatch(login(usernameRef.current.value))
        }
    }

    const MotionBox = motion(Box);
    const mountAnimation = {
        "hidden" : {opacity: 0, scale: 0.7, y:100},
        "visible" : {opacity: 1, scale: 1, y:0, transition:{type:"spring"}}
    }
    return (
        <Box margin={50}>
            <Text fontSize='2xl' mb={35} ml={2}>Register</Text>
            <FormControl>
                <InputGroup id="Username" mb={2}>
                    <InputLeftElement ml={3} mr={1} children={<FontAwesomeIcon icon={faUser}  color='gray'/>}/>
                    <Input ref={usernameRef} placeholder='Username' bgColor='white' mx='3' variant="outline" w="100%"
                           focusBorderColor={!errors.username ? 'grey' : 'red'}
                           borderColor={!errors.username ? 'grey' : 'red'}/>
                </InputGroup>

                <InputGroup id="Password" mb={2}>
                    <InputLeftElement ml={3} mr={1} children={<Button variant='subtle' size="xs" h="full" onClick={showPassword}>{passwordVisible ? "Hide" : "Show"}</Button>}/>


                    <Input ref={passwordRef} placeholder='Password' bgColor='white' mx='3' variant="outline"
                           type={passwordVisible ? "text" : "password"} w="100%"
                           onChange={e => checkTextValidity(e.currentTarget.value)}
                           focusBorderColor={validtext ? 'green.300' : 'red.300'}
                           borderColor='grey.300'

                    />
                </InputGroup>

                <InputGroup id="Email" mb={2}>
                    <InputLeftElement ml={3} mr={1} children={<FontAwesomeIcon icon={faAt}  color='gray'/>}/>
                    <Input ref={emailRef} placeholder='Email' type='email' bgColor='white' mx='3' variant="outline" p w="100%"
                           focusBorderColor={!errors.email ? 'grey' : 'red'}
                           borderColor={!errors.email ? 'grey' : 'red'}
                    />
                </InputGroup>

                <ButtonGroup variant="solid" spacing='6'>
                    <Button color='blue.300' mt={15} onClick={handleSubmit}>
                        Register
                    </Button>
                </ButtonGroup>
                <p>{data ? data.username : ''}</p>
            </FormControl>
        </Box>
    )
}
