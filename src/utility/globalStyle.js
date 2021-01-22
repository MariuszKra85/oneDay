import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    font-family: 'Montserrat';
  }

  button {
    padding: 0;
    cursor: pointer;
    font-family: 'Montserrat';
  }

  ul {
    padding: 0;
    margin: 0;
  }
  a{
    text-decoration: none;
  }
`
export default GlobalStyle