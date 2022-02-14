import React, {useState, useRef} from "react";
import {
    FormControl,
    Box,
    Input,
    ButtonGroup,
    Text,
    InputGroup,
    InputLeftElement,
    Button,
    Progress
} from '@chakra-ui/react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser, faAt} from '@fortawesome/free-solid-svg-icons'
import {login} from "../../redux/actions/userActions";
import {motion} from 'framer-motion';
import {register} from '../../api/UserAPI'
import {useQuery} from "react-query";
import {useDispatch, useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import {useAlert} from "react-alert";

export function Register() {
    const dispatch = useDispatch()
    const alert = useAlert()
    const user = useSelector(state => state.user)
    const [errors, setErrors] = useState({username: false, password: false, email: false});
    const [passwordVisible, setPasswordVisible] = useState(false);
    const showPassword = () => setPasswordVisible(!passwordVisible);

    const [validtext, isValidText] = useState(false)
    const emailRef = useRef('');
    const usernameRef = useRef('');
    const passwordRef = useRef('');

    const { data: userData, refetch: submitUser, error: registerError, isLoading } = useQuery('register', () => register(emailRef.current.value, usernameRef.current.value, passwordRef.current.value, setErrors, dispatch)
        , {enabled: false, refetchOnWindowFocus:false, refetchOnMount:false, retry:false});


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

    const handleSubmit = () => {
        if(validtext){
            submitUser();
            alertErrors()
        }else{
            alert.error("Not a valid password")
        }
    }

    const alertErrors = () => {
        for (const error in errors) {
            if(errors[error] === true){
                alert.error(`${error} already in use`)
            }
        }
    }

    return (
        <>
        {isLoading ?  <Progress size='xs' isIndeterminate /> : ''}
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
                    <InputLeftElement ml={3} mr={1}
                        children={
                            <Button variant='subtle' size="xs" h="full" onClick={showPassword}>
                                {passwordVisible ?
                                    <img className="pwd-eye" src="https://cdn-icons-png.flaticon.com/512/159/159078.png" alt={'Show'}/>
                                    :
                                    <img className="pwd-eye" src="https://www.pngkey.com/png/full/926-9265778_png-file-svg-eye-on-off-icon.png" alt={'Hide'}/>
                                }
                            </Button>
                        }
                    />
                    <Input ref={passwordRef} placeholder='Password' bgColor='white' mx='3' variant="outline"
                           type={passwordVisible ? "text" : "password"} w="100%"
                           onChange={e => checkTextValidity(e.currentTarget.value)}
                           focusBorderColor={validtext ? 'green.300' : 'red.300'}
                           borderColor='grey.300'

                    />
                </InputGroup>

                <InputGroup id="Email" mb={2}>
                    <InputLeftElement ml={3} mr={1} children={<FontAwesomeIcon icon={faAt}  color='gray'/>}/>
                    <Input ref={emailRef} placeholder='Email' type="email" bgColor='white' mx='3' variant="outline" p w="100%"
                           focusBorderColor={!errors.email ? 'grey' : 'red'}
                           borderColor={!errors.email ? 'grey' : 'red'}
                    />
                </InputGroup>

                <ButtonGroup variant="solid" spacing='6'>
                    <Button color='blue.300' mt={15} onClick={handleSubmit}>
                        Register
                        {user.isLoggedIn ? <><Navigate to="/"/></> : ''}

                    </Button>
                </ButtonGroup>
            </FormControl>
        </Box>
        </>
    )
}
