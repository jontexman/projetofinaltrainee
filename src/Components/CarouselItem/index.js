import {Container} from './styles'
import {Title} from '../Title'

export const CarouselItem  = (props)=>{
  return (
    <Container>
    <img src={props.src}/>
    {props.legend ? 
      <div  className="legend">
        <Title>{props.legend}</Title>
      </div>
      : null}
    </Container>
  )
}