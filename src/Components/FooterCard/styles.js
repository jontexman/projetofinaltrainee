import styled from 'styled-components'

export const Container = styled.section`
    display: flex;
    height: 100%;

    img {
    height: 80%;
    width: 50%;
    margin: 0px;
    }
    
    .text {
        display:flex;
        flex-wrap: wrap;
        color: blanchedalmond;
        font-size: 0.85rem;
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