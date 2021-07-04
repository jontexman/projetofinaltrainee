import { Carousel } from 'react-responsive-carousel';
import img1 from '../assets/mine1.jpg'
import img2 from '../assets/gtav.jpg'
import img3 from '../assets/rd2.jpg'
import { CarouselItem } from '../Components/CarouselItem';
import {Title} from '../Components/Title'
import {GameCard} from '../Components/GameCard'

export const Home = () => {
  return (
    <section className='page'>

        <Carousel autoPlay={true} autoPlaySpeed={250}infiniteLoop={true} className='carousel'>
          <a href='/jogo'><CarouselItem src={img1} legend='Minecraft'/></a>
          <CarouselItem src={img2} legend='Grand Theft Auto V'/>
          <CarouselItem src={img3} legend='Red Dead Redemption 2'/>
        </Carousel>
        <Title>Novidades</Title>
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
      </section>
    </section>
  );
}