import styled from 'styled-components'

export const Container = styled.section`
  max-width: 100%;
  display: flex;
  justify-content: space-around;
  
  form{
    *{
      display: block;
      position: center;
      width: 100%;
      margin-top: 0.25rem;
    }
  }

  label{
    font-size: 25px;
    font: roboto;
    color: #FFF;
  }
  input, option, select, button, textarea  {
    width: 100%;
    font: roboto;
    font-size: 25px;
    #description{
      word-break: break-word;
    }
  }

  button{
    margin-top: 1rem;
    color: #FFF;
    background-color: #1E2535;
    border: none;
    border-radius: 5px;
  }
  
`;