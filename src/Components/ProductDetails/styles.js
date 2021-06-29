import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 100%;
  p{
    font: roboto;
    font-size: 1.875rem;
    color: #909A9C;
  }

  div{
    min-width: 341px;
    display: inline;
  }

  .release{
    p{
      text-align: left;
    }
  }

  .category{
    p{
      text-align: center;
    }
  }

  .price{
    
    p{
      text-align: right;
      font-size: 2.25rem;
      font-weight: bold;
      vertical-align: middle;
    }
  }
`;