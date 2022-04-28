import styled from "styled-components";

export const RightSideContainer = styled.div`
  margin: 62px 32px 25px 0;
  width: min-content;

  .sub-heading {
    width: max-content;
  }

  .projects {
    margin-bottom: 29px;
  }

  .projects-container {
    display: grid;
    grid-template-columns: repeat(2, auto);
    margin: 17px;
    column-gap: 16px;
    row-gap: 16px;
  }

  .projects-container a {
    position: relative;
    display: block;

    img {
      transition: opacity 0.5s ease-in-out;
    }

    p {
      position: absolute;
      bottom: 50%;
      width: 100%;
      text-align: center;

      transition: color 0.5s ease-in-out;

      color: rgba(0, 0, 0, 0);
    }

    &:hover {
      img {
        opacity: 50%;
      }

      p {
        color: rgba(0, 0, 0, 1);
      }
    }
  }

  .working-on {
    margin-top: 20px;
  }

  .working-on div {
    display: flex;

    p {
      font-size: 14px;
      line-height: 16px;
    }

    img {
      margin-left: 20px;
      align-self: center;
      height: 50px;
      padding: 20px 0;
      border-top: 1px solid black;
      border-bottom: 1px solid black;
    }
  }

  @media (min-width: 641px) and (max-width: 884px) {
    .projects-container {
      grid-template-columns: auto;
      margin: inherit 0;
    }

    .working-on div {
      flex-direction: column;

      img {
        margin: 30px 0;
      }
    }
  }

  @media (max-width: 600px) {
    margin-left: 0;
    margin-right: 0;

    .projects-container {
      grid-template-columns: auto;
      margin: inherit 0;
    }

    .working-on div {
      flex-direction: column;

      img {
        margin: 30px 0;
      }
    }
  }
`;
