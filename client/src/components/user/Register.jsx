import React, {useState, useRef} from "react";
import { Box, Input, ButtonGroup, Text, InputGroup, InputLeftElement, Button } from '@chakra-ui/react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser, faAt} from '@fortawesome/free-solid-svg-icons'

export function Register() {

    const submit = async()=>{
        const response = await fetch('http:/localhost:3000/registration', {
            method: 'POST',
            headers:{
                'Content-Type':"application/json"
            },
            body: JSON.stringify(userdata)
        }).then('Successfull fetch')
        .catch(e => {console.log(e)})
    }

    const [userdata, setUserdata] = useState({
        name:'',
        password:'',
        email:'',
        age:0
    })

    const [passwordVisible, setPasswordVisible] = useState(false);
    const showPassword = () => setPasswordVisible(!passwordVisible);

    return (
        <Box margin={50}>
            <Text fontSize='2xl' mb={35} ml={2}>Register</Text>
            <InputGroup id="Username"  mb={2}>
                <InputLeftElement ml={3} mr={1} children={
                            <FontAwesomeIcon icon={faUser}  color='gray'/>}/>
                <Input
                    bgColor='white'
                    mx='3'
                    variant="outline"
                    placeholder='Username'
                    w="100%"
                    focusBorderColor="grey"
                    placeholderTextColor={'white'}
                    onChangeText={text => setUserdata(userdata => ({    name: text,
                                                                        password: userdata.password,
                                                                        email:userdata.email,
                                                                        age:userdata.age}))}
                />
            </InputGroup>
            <InputGroup id="Password" mb={2}>
                <InputLeftElement ml={3} mr={1} children={<Button variant='subtle' size="xs" h="full" onClick={showPassword}>
                                                    {passwordVisible ? "Hide" : "Show"}
                                                    </Button>}/>
                <Input
                    bgColor='white'
                    mx='3'
                    variant="outline"
                    type={passwordVisible ? "text" : "password"}
                    placeholder='Password'
                    w="100%"
                    focusBorderColor="grey"
                    placeholderTextColor={'white'}
                    onChangeText={text => setUserdata(userdata => ({    name: userdata.name,
                                                                        password: text,
                                                                        email:userdata.email,
                                                                        age:userdata.age}))}
                />
            </InputGroup>
            <InputGroup id="Email" mb={2}>
                <InputLeftElement ml={3} mr={1} children={
                            <FontAwesomeIcon icon={faAt}  color='gray'/>}/>
                <Input
                    bgColor='white'
                    mx='3'
                    variant="outline"
                    placeholder='Email'
                    w="100%"
                    focusBorderColor="grey"
                    placeholderTextColor={'white'}
                    onChangeText={text => setUserdata(userdata => ({    name: userdata.name,
                                                                        password: userdata.password,
                                                                        email:text,
                                                                        age:userdata.age}))}
                />
            </InputGroup>
            <ButtonGroup variant="solid" spacing='6'>
            <Button color='blue.300' mt={15}>
                Register
            </Button>
            </ButtonGroup>
        </Box>
    )
}
