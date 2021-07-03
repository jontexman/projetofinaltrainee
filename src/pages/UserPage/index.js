import React from 'react';
import { Profile } from '../../Components/Profile';
import { FavoriteGames } from '../../Components/FavoriteGames';
import { Box } from './styles';

export const UserPage = () => {
    return (
        <div className="page">
            <Box>
                <Profile name="Usuário" email="usuario1@usuario.com" />
                <FavoriteGames />
            </Box>
        </div >
    )
}