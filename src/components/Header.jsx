import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css'
import { Box, Container } from "@chakra-ui/react"
import { Center, Text, Link } from '@chakra-ui/layout';
import { Button, ButtonGroup, Spacer, Image } from '@chakra-ui/react'
import TypeIt from "typeit-react";
import bgHome from '../img/bgHome.jpg';


const Header = () => {

    const navigate = useNavigate()  

    const LoginPickHandler = () => {
        navigate('/login')
    }

    const HomePickHandler = () => {
        navigate('/')
    }

    return (  
        <Box className='background-image'>
            <Box>
                <Center>
                    <Box w="100%" h="60px" className='navBar' boxShadow='lg'>
                        <Link color='white' className='logo' _hover={{textDecoration: 'none'}}>Agendify</Link>
                        <Spacer/>
                        <Link color='white' mr='10' as='b'>Sobre</Link>
                        <Link color='white' mr='10' as='b'>Funcionalidades</Link>
                        <Link color='white' mr='10' as='b'>Empresas</Link>
                        <Button mr='7' colorScheme='teal' onClick={() => LoginPickHandler()}>Acessar</Button>
                    </Box>
                </Center>
            </Box>
            <Box className='titleBox'>
                <TypeIt className='title' fontSize='5xl'>
                    <p>SISTEMA DE AGENDAMENTO / RESERVAS</p>
                    <p> PARA SUA EMPRESA</p>
                    <Button>SOBRE AGENDIFY</Button>
                </TypeIt>
            </Box>
        </Box>
    );
}

export default Header;
