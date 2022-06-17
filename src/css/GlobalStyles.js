import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        text-align: center;
        box-sizing: border-box;
    }
  ul,li,ol {
    list-style: none;
  }
  a {
    color:black;
    text-decoration:none;
  }
  body {
  }
`;
export default GlobalStyles;
