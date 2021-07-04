import { Carousel } from 'react-responsive-carousel';
import img1 from '../assets/mine1.jpg'
import img2 from '../assets/gtav.jpg'
import img3 from '../assets/rd2.jpg'
import { CarouselItem } from '../Components/CarouselItem';
import {Title} from '../Components/Title'

export const Home = () => {
  return (
    <section className='page'>
      <h1>Altere essa pagina no arquivo src/page/home.js</h1>
      <a href='/jogo'><h1>Pagina de jogo (modelo Minecraft)</h1></a>
      <a href='/publisher'><h1>Pagina de publisher (Falta fazer a parada p/ caso haja mais paginas)</h1></a>
      <a href='/UserPage'><h1>User Page</h1></a>

        <Carousel autoPlay={true} autoPlaySpeed={250}infiniteLoop={true} className='carousel'>
          <a href='/jogo'><CarouselItem src={img1} legend='Minecraft'/></a>
          <CarouselItem src={img2} legend='Grand Theft Auto V'/>
          <CarouselItem src={img3} legend='Red Dead Redemption 2'/>
        </Carousel>

    </section>
  );
}