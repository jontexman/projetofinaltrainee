import {Container} from './styles'

export const Text = (props) => {
  return (
    <Container>
      {props.children ? <p>{props.children}</p> : null}
    </Container>
  );
}