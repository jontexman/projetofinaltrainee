import { propTypes } from 'react-bootstrap/esm/Image';
import {Container} from './styles'

export const GameCard = (props) => {
  return(
    <Container>
      <img src={props.img}/>
      <p className='name'>{props.name}</p>
      <p className='price'>{props.price}</p>
    </Container>
  );
}