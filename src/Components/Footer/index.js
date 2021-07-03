import React from 'react';
import {FooterCard} from '../FooterCard'
import img1 from '../../assets/iagoprofile.png'
import img2 from '../../assets/joaoprofile.jpg'
import img3 from '../../assets/mateusprofile.jpg'
import img4 from '../../assets/pedrprofile.jpg'
import { Container } from './styles';

export const Footer = () => {
    return (
        <Container className="hide-small">
            
            <FooterCard img = {img1} name="Iago Carvalho" favoritegame="Minecraft"></FooterCard>
            <FooterCard img = {img2} name="João Paulo" favoritegame="Apex Legends"></FooterCard>
            <FooterCard img = {img3} name="Mateus Ribeiro" favoritegame="Fifa 21"></FooterCard>
            <FooterCard img = {img4} name="Pedro Lucas" favoritegame="League of Legends"></FooterCard>
        </Container>
    )
}