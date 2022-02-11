import React, {useState, useRef} from "react";
import { Flex, Spacer, Box, Input, ButtonGroup, Text, InputGroup, InputLeftElement, Button } from '@chakra-ui/react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser, faAt} from '@fortawesome/free-solid-svg-icons'
import {useDispatch} from "react-redux";
import {login} from "../../redux/actions/userActions";
import { registerUser } from './UserAPI';
import {useQuery, useQueryClient} from "react-query";
import axios from "axios";

export function Signin() {
    const [userdata, setUserdata] = useState({
        name:'',
        password:''
    })

    const handleChange = event =>{
        const {name, value} = event.target;
        setUserdata(prevState => ({
            ...prevState,
            [name]:value
        }))
    }

    const queryClient = useQueryClient();

    const { data, isLoading, error, refetch } = useQuery('user',
        ()=>(axios.post('http://localhost:3001/signin', {userdata}).then(res => console.log('working'))), {enabled: false});


    const dispatch = useDispatch();


    const [passwordVisible, setPasswordVisible] = useState(false);
    const showPassword = () => setPasswordVisible(!passwordVisible);

    const handleSubmit = () => {
        console.log(userdata.password)
        refetch();
    }

    return (
        <Box margin={50}>
            <Text fontSize='2xl' mb={35} ml={2}>Sign in</Text>
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
                    value={userdata.name}
                    type='text'
                    name='name'
                    onChange={handleChange}
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
                    name='password'
                    value={userdata.password}
                    onChange={handleChange}
                />
            </InputGroup>
            <ButtonGroup variant="solid" spacing='6'>
            <Button color='blue.300' mt={15} onClick={ () => dispatch(login())}>
                Sign in
            </Button>
            <Button color='blue.300' mt={15} onClick={handleSubmit}>
                Submit Query
            </Button>
            </ButtonGroup>
            <Text> password: {userdata.password}</Text>
            <Text> name : {userdata.name}</Text>
            <Text>{data ? data : 'no data'}</Text>
        </Box>
    )
}