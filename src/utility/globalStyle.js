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
    scroll-behavior: smooth;
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
  .slick-prev {
    z-index:10;
    left: 25px;
    [dir="rtl"] & {
        left: auto;
        right: 25px;
    }
    &:before {
        content: $slick-prev-character;
        [dir="rtl"] & {
            content: $slick-next-character;
        }
    }
}

.slick-next {
  z-index:10;
    right: 25px;
    [dir="rtl"] & {
        left: 25px;
        right: auto;
    }
    &:before {
        content: $slick-next-character;
        [dir="rtl"] & {
            content: $slick-prev-character;
        }
    }
}
.slick-dots {
    position: absolute;
    bottom: 30px;
    list-style: none;
    display: block;
    text-align: center;
    padding: 0;
    margin: 0;
    width: 100%;
    li {
        position: relative;
        display: inline-block;
        height: 20px;
        width: 20px;
        margin: 0 5px;
        padding: 0;
        cursor: pointer;
        button {
            border: 0;
            background: transparent;
            display: block;
            height: 20px;
            width: 20px;
            outline: none;
            line-height: 0px;
            font-size: 0px;
            color: transparent;
            padding: 5px;
            cursor: pointer;
            &:hover, &:focus {
                outline: none;
                &:before {
                    opacity: 1;
                }
            }
            &:before {
                position: absolute;
                top: 0;
                left: 0;
                width: 20px;
                height: 20px;
                line-height: 20px;
                text-align: center;
                color: yellow;

                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
            }
        }
        &.slick-active button:before {
            color: violet;
            opacity: 0.8;
        }
    }
}

`
export default GlobalStyle