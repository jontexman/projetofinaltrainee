import {
    GamesBox,
    GameImage,
    Text
} from './styles';

import { GameCard } from '../GameCard';

import GamePlaceholder from '../../assets/game.png';

export const FavoriteGames = () => {
    return (
        <GamesBox>
            <Text>Jogos Favoritos:</Text>
            <GameImage src={GamePlaceholder} name='Minecraft'></GameImage>
            <GameImage src={GamePlaceholder} name='Minecraft'></GameImage>
            <GameImage src={GamePlaceholder} name='Minecraft'></GameImage>
            <GameImage src={GamePlaceholder} name='Minecraft'></GameImage>
            <GameImage src={GamePlaceholder} name='Minecraft'></GameImage>
        </GamesBox>
    )
}