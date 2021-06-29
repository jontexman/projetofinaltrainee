import './App.css';
import { Footer } from './Components/Footer'
import {Navbar} from './Components/Navbar'
import {GlobalStyle} from './styles/global'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from './assets/mine1.jpg'
import img2 from './assets/mine2.jpg'
import img3 from './assets/mine3.png'
import { CarouselItem } from './Components/CarouselItem';
import {Title} from './Components/Title'
import {ProductDetails} from './Components/ProductDetails'
import {Text} from './Components/Text'
import {Video} from './Components/Video'

function App() {
  return (
    <>
      <GlobalStyle/>
      <Navbar/>
      <section>
        <Title>Minecraft</Title>
        <ProductDetails producer='Mojang' date='Novembro de 2011' category1='Sandbox' category2='Sobrevivência' price='R$ 29,90'/>
        <Carousel autoPlay={true} autoPlaySpeed={250}infiniteLoop={true} className='carousel'>
          <CarouselItem src={img1} />
          <CarouselItem src={img2} />
          <CarouselItem src={img3} />
        </Carousel>
        <Text>
          Minecraft é um jogo eletrônico dos gêneros sandbox e sobrevivência que não possui objetivos específicos a serem alcançados, permitindo aos jogadores uma grande liberdade de escolha de como jogar o jogo. No entanto, existe um sistema de conquistas, conhecido como "progressos" na edição Java do jogo. A jogabilidade é apresentada numa perspectiva em primeira pessoa por padrão, mas os jogadores têm a opção de selecionarem uma visão em terceira pessoa. O mundo aberto do jogo é composto de objetos tridimensionais brutos — principalmente cubos e fluidos, sendo comumente chamados de "blocos" — representando vários materiais, como pedra, minérios, troncos de árvores, água e lava. A jogabilidade principal gira em torno de pegar e colocar esses objetos, que são organizados em uma grade tridimensional, enquanto os jogadores podem se mover livremente pelo mundo. Os jogadores podem "extrair" blocos e depois colocá-los em outro lugar, permitindo que eles construam coisas distintas. Muitos analistas descreveram o sistema de física do jogo como irrealista; líquidos fluem continuamente por uma distância horizontal limitada dos blocos de origem, que podem ser removidos colocando um bloco sólido em seu lugar ou colocando-o em um balde. O jogo também contém um material conhecido como redstone, que pode ser usado para fabricar dispositivos mecânicos primitivos e circuitos elétricos, permitindo a construção de muitos sistemas complexos.
        </Text>
        <Video url='https://www.youtube.com/embed/MmB9b5njVbA'/>
      </section>

      <Footer/>
     
    </>
  );
}

export default App;
