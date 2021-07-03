import { propTypes } from 'react-bootstrap/esm/Image';
import {Container} from './styles'

export const GameCard = (props) => {
  return(
    <Container>
      <a href='/jogo'>
        <img src={props.img}/>
        <p className='name'>{props.name}</p>
        <p className='price'>{props.price}</p>
      </a>
    </Container>
  );
}