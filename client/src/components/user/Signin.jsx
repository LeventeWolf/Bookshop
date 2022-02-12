import React, {useState} from "react";
import {
    Box,
    Input,
    ButtonGroup,
    Text,
    InputGroup,
    InputLeftElement,
    Button,
    FormControl
} from '@chakra-ui/react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser, faAt} from '@fortawesome/free-solid-svg-icons'
import {useDispatch} from "react-redux";
import {login} from "../../redux/actions/userActions";
import {signin}  from './UserAPI';
import {useQuery, useQueryClient} from "react-query";
import {motion} from 'framer-motion'

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

    const { data, isLoading, error, refetch } = useQuery('signin', signin(userdata)
        , {enabled: false});


    const dispatch = useDispatch();


    const [passwordVisible, setPasswordVisible] = useState(false);
    const showPassword = () => setPasswordVisible(!passwordVisible);

    const handleLogin = () => {
        refetch();
        dispatch(login())
    }

    // const MotionBox = motion(Box);
    // const mountAnimation = {
    //     "hidden" : {opacity: 0, scale: 0.7, y:100},
    //     "visible" : {opacity: 1, scale: 1, y:0, transition:{type:"spring"}}
    // }

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
                    borderColor='grey.300'
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
                    borderColor='grey.300'
                    name='password'
                    value={userdata.password}
                    onChange={handleChange}
                />
            </InputGroup>
            <ButtonGroup variant="solid" spacing='6'>
            <Button color='blue.300' mt={15} onClick={handleLogin}>
                Sign in
            </Button>
            </ButtonGroup>
        </Box>
    )
}
