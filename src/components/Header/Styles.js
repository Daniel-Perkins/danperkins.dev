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
    grid-template-columns: 100px 100px;
    grid-template-rows: 100px 100px;

    a {
      justify-self: center;
      align-self: center;
    }

    svg {
      height: 75px;
      width: 75px;
    }
  }

  @media (min-width: 641px) and (max-width: 1007px) {
    height: 600px;
  }

  @media (max-width: 640px) {
    height: 600px;
    flex-direction: column;
  }
`;
