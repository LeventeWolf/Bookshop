import React, {useState} from "react";
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
import {faUser, faAt} from '@fortawesome/free-solid-svg-icons'
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../redux/actions/userActions";
import {signin} from '../../api/UserAPI';
import {useQuery} from "react-query";
import {useNavigate} from "react-router-dom";
import {useAlert} from "react-alert";

export function Signin() {
    const alert = useAlert();
    const dispatch = useDispatch();
    const [userdata, setUserdata] = useState({name: '', password: ''})
    const [passwordVisible, setPasswordVisible] = useState(false);
    const isLoggedIn = useSelector(state => state.user.isLoggedIn)
    const navigate = useNavigate();
    const {isLoading, refetch: authenticate} = useQuery('signin', () => signin(userdata), {enabled: false});

    const handleLogin = () => {
        authenticate().then(response => {
            if (isLoading) {
                console.log('Loading')
                return;
            }

            const isAuthenticated = response.data.data.isAuthenticated;

            if (isAuthenticated) {
                alert.success(`Login successful!`);

                dispatch(login({
                    username: userdata.name,
                    useravatar: './Avatars/Wolf.jfif'
                }))

                navigate('/')
            } else {
                alert.error(`Wrong username or password`);
            }
        });
    }

    const showPassword = () => setPasswordVisible(!passwordVisible);

    const handleChange = event => {
        const {name, value} = event.target;
        setUserdata(prevState => ({
            ...prevState,
            [name]: value
        }))
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
                  children={
                      <Button variant='subtle' size="xs" h="full" onClick={showPassword} tabIndex={-1}>
                          {passwordVisible ?
                              <img className="pwd-eye" src="https://cdn-icons-png.flaticon.com/512/159/159078.png"
                                   alt={'Show'}/>
                              :
                              <img className="pwd-eye"
                                  src="https://www.pngkey.com/png/full/926-9265778_png-file-svg-eye-on-off-icon.png"
                                  alt={'Hide'}/>
                          }
                      </Button>
                  }
                />
                <Input bgColor='white' w="100%" mx='3' variant="outline" borderColor='grey.300'
                       type={passwordVisible ? "text" : "password"}
                       placeholder='Password'
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
    );
}
