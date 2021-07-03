import React from 'react';
import {FooterCard} from '../FooterCard'
import img1 from '../../assets/mine1.jpg'
import { Container } from './styles';

export const Footer = () => {
    return (
        <Container>
            <FooterCard img = {img1} name="Iago Carvalho" favoritegame="Minecraft"></FooterCard>
            <FooterCard img = {img1} name="João Paulo" favoritegame="Apex Legends"></FooterCard>
            <FooterCard img = {img1} name="Mateus Ribeiro" favoritegame="Fifa 21"></FooterCard>
            <FooterCard img = {img1} name="Pedro Lucas" favoritegame="League of Legends"></FooterCard>
        </Container>
    )
}