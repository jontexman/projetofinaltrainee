import {Container} from './styles'

export const Video = (props) => {
  return(
    <Container>
      <iframe src={props.url}/>
    </Container>
  );
}