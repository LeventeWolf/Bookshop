import React, {useState, useRef} from "react";
import {FormControl, Box, Input, ButtonGroup, Text, InputGroup, InputLeftElement, Button } from '@chakra-ui/react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser, faAt} from '@fortawesome/free-solid-svg-icons'
import Axios from "axios";
import {motion} from 'framer-motion';

export function Register() {
    const [errors, setErrors] = useState({username: false, password: false, email: false});
    const [passwordVisible, setPasswordVisible] = useState(false);
    const showPassword = () => setPasswordVisible(!passwordVisible);

    const emailRef = useRef('');
    const usernameRef = useRef('');
    const passwordRef = useRef('');

    function handleSubmit() {
        Axios.post('http:/localhost:3001/registration', {
            email: emailRef.current.value,
            username: usernameRef.current.value,
            password: passwordRef.current.value,
        }).then(response => {
            console.log('Successful registration!');
        }).catch(response => {
            setErrors({username: true, password: true, email: true})

            console.log(`Error: ${response}`)
        });
    }

    const MotionBox = motion(Box);
    const mountAnimation = {
        "hidden" : {opacity: 0, scale: 0.7, y:100},
        "visible" : {opacity: 1, scale: 1, y:0, transition:{type:"spring"}}
    }
    return (
        <MotionBox variants={mountAnimation} initial="hidden" animate="visible" margin={50}>
            <Text fontSize='2xl' mb={35} ml={2}>Register</Text>
            <FormControl>
                <InputGroup id="Username" mb={2}>
                    <InputLeftElement ml={3} mr={1} children={<FontAwesomeIcon icon={faUser}  color='gray'/>}/>
                    <Input ref={usernameRef} placeholder='Username' bgColor='white' mx='3' variant="outline" w="100%"
                           focusBorderColor={!errors.username ? 'grey' : 'red'}
                           borderColor={!errors.username ? 'grey' : 'red'}/>
                </InputGroup>

                <InputGroup id="Password"mb={2}>
                    <InputLeftElement ml={3} mr={1} children={<Button variant='subtle' size="xs" h="full" onClick={showPassword}>{passwordVisible ? "Hide" : "Show"}</Button>}/>


                    <Input ref={passwordRef} placeholder='Password' bgColor='white' mx='3' variant="outline" type={passwordVisible ? "text" : "password"} w="100%"
                           focusBorderColor={!errors.password ? 'grey' : 'red'}
                           borderColor={!errors.password ? 'grey' : 'red'}
                    />
                </InputGroup>

                <InputGroup id="Email" mb={2}>
                    <InputLeftElement ml={3} mr={1} children={<FontAwesomeIcon icon={faAt}  color='gray'/>}/>
                    <Input ref={emailRef} laceholder='Email' bgColor='white' mx='3' variant="outline" p w="100%"
                           focusBorderColor={!errors.email ? 'grey' : 'red'}
                           borderColor={!errors.email ? 'grey' : 'red'}
                    />
                </InputGroup>

                <ButtonGroup variant="solid" spacing='6'>
                    <Button color='blue.300' mt={15} onClick={handleSubmit}>
                        Register
                    </Button>
                </ButtonGroup>
            </FormControl>
        </MotionBox>
    )
}
