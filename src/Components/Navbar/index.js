import React from 'react';
import LogoAzul from '../../assets/logo_azul.png';
import { Container } from './styles';

export const Navbar = () => {
    return (
        <Container>

            <button>Menu</button>
            <img src={LogoAzul} alt="" />
            <button>Usuário</button>

        </Container>
    )
}