import { propTypes } from 'react-bootstrap/esm/Image';
import {Container} from './styles'

export const FooterCard = (props) => {
  return(
    <Container>
      <img src={props.img}/>
      <div className="text">
      <p className='name'>{props.name}</p>
      <p className='favoritegame'>{props.favoritegame}</p>
      </div>
    </Container>
  );
}