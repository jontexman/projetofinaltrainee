import {Container} from "./styles"
import {Title} from "../Title"

export const ProductDetails = (props) => {
  return(
    <Container>
      <div className='release'>
        {props.producer ? <p>{props.producer}</p> : null}
        {props.date ? <p>{props.date}</p> : null}
      </div>

      <div className='category'>
        {props.category1 ? <p>{props.category1}</p> : null}
        {props.category2 ? <p>{props.category2}</p> : null}
      </div>

      <div className='price'>
        {props.price ? <p>{props.price}</p> : null}
      </div>
    </Container>
  );
}