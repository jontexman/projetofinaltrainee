import {Container} from './styles'

export const CarouselItem  = (props)=>{
  return (
    <Container>
    <img src={props.src}/>
    {props.legend ? <p className="legend">{props.legend}</p> : null}
    </Container>
  )
}