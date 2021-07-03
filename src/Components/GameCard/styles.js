import styled from 'styled-components'

export const Container = styled.section`
  height: 237px;
  width: 219px;
  background-color: rgba(0,0,0,0.2);
  border-radius: 5px;
  margin: 1.5rem 0;
  transition: transform .2s;

  :hover{
    transform: scale(1.05);
    
  }

  

  img {
    max-height: 150px;
    max-width: 219px;
    width: 100%;
    height: 100%;
    border-radius: 5px 5px 0 0;
  }

  p{
    font: roboto;
    color: #FFF;
    font-size: 22.5px;
    text-align: center;
    margin-top: 10px; 
  }
  .name{
    font-weight: bold;
  }
`;