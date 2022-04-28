import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  margin: 25px 40px 0 40px;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 25px;
  border-bottom: 1px solid black;

  .name {
    font-size: 60px;
    font-weight: 300;
  }

  .photo {
    height: 200px;
    width: 200px;
  }

  .social-logos {
    height: 200px;
    width: 200px;

    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-template-rows: repeat(2, auto);

    a {
      justify-self: center;
      align-self: center;
    }

    svg {
      height: 75px;
      width: 75px;
    }
  }

  @media (min-width: 641px) and (max-width: 884px) {
    .name {
      font-size: 6vw;
    }
    .photo {
      height: 150px;
      width: 150px;
    }
    .social-logos {
      height: 150px;
      width: 150px;
    }
  }

  @media (max-width: 640px) {
    height: 600px;
    flex-direction: column;

    .name {
      text-align: center;
    }
  }
`;
