import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

var font =
  "https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&family=Roboto:wght@100;300;400;500;700&display=swap";

export const GlobalStyle = createGlobalStyle`
  ${reset}
  @import url(${font});

  /* General Fix */

  a {
    color: black;
    text-decoration: none;
  }

  /* Typography */

  body {
    font-family: "Lato", sans-serif;
  }

  .sub-heading {
    margin-bottom: 24px;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0.68em;
  }

  /* App styles */
  body {
    margin: 70px auto;
    width: 884px;
    border: 1px black solid;
  }

  main {
    display: flex;
  }
`;
