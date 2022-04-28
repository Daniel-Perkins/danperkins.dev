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
    border: 1px black solid;
  }

  main {
    display: flex;
    justify-content: center;
  }

  @media (min-width: 884px) {
    body {
      width: 884px;
    }
  }

  @media (min-width: 641px) and (max-width: 884px) {
    body {
      margin: 5px;
    }

    main {
      hr {
        margin: 0;
      }

      justify-content: space-around;
    }
  }

  @media (max-width: 640px) {
    body {
      margin: 5px;
    }

    main {
      flex-direction: column;
      align-items: center;
    }
  }
`;
