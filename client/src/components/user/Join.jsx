import React from "react";
import { Register } from './Register'
import { Signin } from './Signin'
import { Flex, Spacer, Box } from '@chakra-ui/react'

function Join() {
    return (
        // <Box w='70%' height={500}  margin="auto" marginTop={150} marginBottom={150} 
        // boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)" opacity={0.86} borderRadius={6}
        // style={{filter: "blur(2.5px)"}} bg="#CDC9C95C">
    <Box w='70%' height={500}  margin="auto" marginTop={10} bg="#CDC9C95C" maxWidth={1440} borderRadius={16} boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)">
        <Flex>
            <Box margin={50}>
                <Register/>
            </Box>
            <Spacer />
            <Box margin={50}>
                <Signin /> 
            </Box>
        </Flex>
    </Box>
    );
}

export default Join;
