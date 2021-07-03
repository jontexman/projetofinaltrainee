import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  :root{
    --bg-color: #243C58;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .carousel{
    margin-top: 1.5rem;
  }

  body {
    font-family: sans-serif;
    background-color: var(--bg-color);
  }



  html,body{
    margin: 0;
    padding: 0;
    height: 100%;
  }
  
  html {
    overflow-y: scroll;
  }
  #wrapper {
    min-height: 100vh;
    position: relative;
  }

  .page{
    padding-bottom: 9rem;
  }

  section {
    max-width: 768px;
    align-self: center;
    margin-top: 1.5rem;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    height: 100%;

    section{
      margin-top: 0;
    }
  }

  a{
    text-decoration: none;
    cursor: pointer;
  }

  .wrap-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 100%;
  }

  ::-webkit-scrollbar {
    width: 10px;               /* width of the entire scrollbar */
  }

  :-webkit-scrollbar-track {
    background: #243C58;        /* color of the tracking area */
  }

  ::-webkit-scrollbar-thumb {
    background-color: #1E2535;    /* color of the scroll thumb */
    border-radius: 20px;       /* roundness of the scroll thumb */
    border: 1px solid #243C58;  /* creates padding around scroll thumb */
  }

  @media only screen and (max-width: 500px) { 
        .hide-small { 
            display: none; 
        } 
    }

`;