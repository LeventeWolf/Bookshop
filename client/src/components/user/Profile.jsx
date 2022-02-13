import React from 'react'
import {useSelector} from "react-redux";
import { Box, Input } from "@chakra-ui/react";
// import { getUserData } from './UserApi'
import apiClient from '../../http-common'
function Profile(){

    return (
        <Box className="main-wrap">
            <h1 className="page-title">Profile</h1>

        </Box>
    )

}

export default Profile