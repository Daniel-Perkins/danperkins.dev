import styled from "styled-components";

export const LeftSideContainer = styled.div`
  width: 238px;
  margin: 62px 32px 30px 40px;

  .about-text {
    font-size: 14px;
    line-height: 16px;
  }

  .contact-info {
    margin: 25px 8px;
    height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .contact-info a {
    display: flex;

    svg {
      height: 20px;
      width: 20px;
      margin-right: 12px;
    }
  }

  .my-skills {
    margin: 20px 0;

    .skills-logos {
      margin-top: 20px;
      display: grid;
      grid-template-columns: repeat(4, auto);
      row-gap: 12px;

      svg {
        height: 50px;
        justify-self: center;
      }
    }
  }

  @media (max-width: 641px){
    margin-left: 0;
    margin-right: 0;
  }
`;
