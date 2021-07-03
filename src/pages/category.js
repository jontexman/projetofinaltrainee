import {Title} from '../Components/Title'
import {GameCard} from '../Components/GameCard'
import img1 from '../assets/mine1.jpg'
import { useParams } from 'react-router-dom'

export const Category = () => {
  let {name} = useParams();
  return (
    <section className='page'>
      <Title>{name}</Title>
      <section className='wrap-content'>
        <GameCard img={img1} name='Minecraft' price='R$ 29,90'></GameCard>
        <GameCard img={img1} name='Minecraft' price='R$ 29,90'></GameCard>
        <GameCard img={img1} name='Minecraft' price='R$ 29,90'></GameCard>
        <GameCard img={img1} name='Minecraft' price='R$ 29,90'></GameCard>
        <GameCard img={img1} name='Minecraft' price='R$ 29,90'></GameCard>
        <GameCard img={img1} name='Minecraft' price='R$ 29,90'></GameCard>
        <GameCard img={img1} name='Minecraft' price='R$ 29,90'></GameCard>
        <GameCard img={img1} name='Minecraft' price='R$ 29,90'></GameCard>
        <GameCard img={img1} name='Minecraft' price='R$ 29,90'></GameCard>
        <GameCard img={img1} name='Minecraft' price='R$ 29,90'></GameCard>
        <GameCard img={img1} name='Minecraft' price='R$ 29,90'></GameCard>
        <GameCard img={img1} name='Minecraft' price='R$ 29,90'></GameCard>
      </section>
    </section>
  );
} 