import styled from 'styled-components'

export const Container = styled.section`
    display: flex;

    max-height: 4.7rem;
    img {   
    position: relative;
    top: -0.6rem;
    max-height: 4.7rem;
    width: auto;
    margin: 0px;
        
    }
    
    .text {
        max-height: 5rem;
        display:flex;
        width: 100%;
        flex-wrap: wrap;
        color: blanchedalmond;
        font-size: 0.9rem;
        align-items: flex-start;
      
    }
        .name {
            text-indent: 1rem;
            font-weight: 700;
     
        }
        .favoritegame {
            font-style: italic;
            text-indent: 1rem;
        }
`; 