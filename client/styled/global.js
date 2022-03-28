import {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  html,
  body,
  #__next {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    height: 100%;
    width: 100%;
    color: white;
    background: #F9FAFB;
    word-break: break-word;
  }

  ul {
    list-style-type: none;
  }
  input,
  input:focus,
  button {
    border: none;
    outline: none;
  }
  button {
    cursor: pointer;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`
export default GlobalStyle
