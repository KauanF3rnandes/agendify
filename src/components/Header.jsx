import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css'
import { Box } from "@chakra-ui/react"
import { Center, Text } from '@chakra-ui/layout';

const Header = () => {

    const navigate = useNavigate()

    return (  
        <header>
            <Center>
                <Box w="80%" h="60px" bg='gray.200' className='navBar'>
                    <Text pl='7' as='b'>Agendify</Text>
                </Box>
            </Center>
        </header>
    );
}

export default Header;