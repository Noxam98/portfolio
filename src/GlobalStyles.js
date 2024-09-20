import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    display: flex;
    justify-content: center;
    font-family: 'Arial', sans-serif;
    background-color: #f4f4f4;
    padding: 20px;
  }
`;

export default GlobalStyle;