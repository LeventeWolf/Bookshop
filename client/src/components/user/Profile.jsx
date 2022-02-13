import React from 'react'
import {useSelector} from "react-redux";
import { Box, Input } from "@chakra-ui/react";
// import { getUserData } from './UserApi'
import apiClient from '../../http-common'
import {PageTitle} from "../../styles/Component.styles";
function Profile(){

    return (
        <Box className="main-wrap">
            <PageTitle>Profile</PageTitle>

        </Box>
    )

}

export default Profile