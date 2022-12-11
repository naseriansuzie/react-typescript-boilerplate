import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle` 
  html,
  body {
    min-width: 375px;
    box-sizing: border-box;
    padding:0;
    border:0;
    margin: 0;
    font-size: 62.5%;
  }

  * {
    font-family: AppleSDGothicNeo, "Apple SD Gothic Neo", Roboto, sans-serif;
  }

  html, body, div, span, h1, h2, h3, h4, h5, h6, p,
  a, dl, dt, dd, ol, ul, li, form, label, table {
    padding: 0;
    border: 0;
    margin: 0;
    vertical-align: baseline;
  }
  
  button {
    padding: 0;
    border: none;
    margin: 0;
    background-color: transparent;
    cursor: pointer;
    outline: none;
    -webkit-tap-highlight-color : transparent;
  }

  ol, ul {
    list-style: none;
  }

  a, a:visited {
    color: black;
    text-decoration: none;
  }
`;

export default GlobalStyle;
