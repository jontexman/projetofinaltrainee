import React from 'react';
import LogoAzul from '../../assets/logo_azul.png';
import { Container } from './styles';


export const Navbar = () => {
    return (
        <Container>
            <button>Menu</button>  
            <a href='/'><img src={LogoAzul} alt="" /></a>
            <button onClick={event =>  window.location.href='/Login'}>Usuário</button>
        </Container>
    )
}