import { createGlobalStyle } from "styled-components";
import {colors} from './colors'

const GlobalStyle = createGlobalStyle`

    $font-color: rgb(230, 230, 230);

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
    background-color: ${colors.bgColor};
    color: ${colors.fontColor};
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