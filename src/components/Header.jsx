import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css'
import { Box } from "@chakra-ui/react"
import { Center, Text, Link } from '@chakra-ui/layout';
import { Button, ButtonGroup, Spacer } from '@chakra-ui/react'
import TypeIt from "typeit-react";


const Header = () => {

    const navigate = useNavigate()  

    return (  
        <header>
            <Box className="background-image">
                <Center>
                    <Box w="80%" h="60px" bg='gray.200' className='navBar' boxShadow='lg'>
                        <Link pl='7' as='b' href='/' _hover={{textDecoration: 'none'}}>Agendify</Link>
                        <Spacer/>
                        <Button mr='7' colorScheme='teal'>Acessar</Button>
                    </Box>
                </Center>
                <Center>
                    <Box mt='20'>
                        <Text className='titulo'>Sistema de Agendamento / Reserva
                            
                        </Text>
                    </Box>
                </Center>
            </Box>
        </header>
    );
}

export default Header;
