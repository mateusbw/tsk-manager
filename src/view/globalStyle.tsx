import { createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Inter';
    src: url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap');;
    font-style: normal;
  }

  html {
    -webkit-tap-highlight-color: transparent;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    -webkit-tap-highlight-color: inherit;
  }

  html, button {
    font-family: 'Inter';
  }

  h1,h2,h3,h4,h5,h6,p{
    margin: 0;
    line-height: 0
  }

  body {
    margin: 0;
    font-size: 1.6rem;
    background-color: ${theme.colors.gray[950]};
    color: ${theme.colors.white};
    animation-duration: 0s !important;
    overflow-x: hidden;

  }

`;

export default GlobalStyle;
