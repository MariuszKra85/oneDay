import { createGlobalStyle } from "styled-components";
import {colors} from './colors'

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
    font-family: 'Roboto';
    background-color: ${colors.bgColor};
    color: ${colors.fontColor};
  }

  button {
    padding: 0;
    cursor: pointer;
    font-family: 'Roboto';
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