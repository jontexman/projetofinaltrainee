import styled from 'styled-components'

export const Container =  styled.section`

.base-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .header {
    font-size: 24px;
    font-family: "Open Sans", sans-serif;
  }

  .content {
    display: flex;
    flex-direction: column;

   
    .form {
      margin-top: 2em;
      display: flex;
      flex-direction: column;
      align-items: center;

      .form-group {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: fit-content;
        label {
          font-size: 20px;
        }
        input {
          margin-top: 6px;
          min-width: 18em;
          height: 37px;
          padding: 0px 10px;
          font-size: 16px;
          font-family: "Open Sans", sans-serif;
          background-color: #f3f3f3;
          border: 0;
          border-radius: 4px;
          margin-bottom: 31px;
        }
      }
    }
  }
  .footer {
    margin-top: 3em;
  }
}

`;