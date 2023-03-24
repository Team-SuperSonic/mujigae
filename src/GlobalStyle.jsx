import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Poppins;
    src: url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap');
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-family: Poppins;
  }
`;

export default GlobalStyle;
