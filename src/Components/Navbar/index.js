import React from 'react';
import LogoAzul from '../../assets/logo_azul.png';
import { Container } from './styles';


export const Navbar = () => {
    return (
        <Container>
            <button>Menu</button>  
            <a href='/'><img src={LogoAzul} alt="" /></a>
            <button>Usuário</button>
        </Container>
    )
}