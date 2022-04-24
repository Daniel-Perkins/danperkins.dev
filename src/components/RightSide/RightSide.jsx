import { RightSideContainer } from "./Styles";

const template = require("../../assets/template.png");
const web3logo = require("../../assets/Web3.png");

const RightSide = () => {
  return (
    <RightSideContainer>
      <div className="projects">
        <h3 className="sub-heading">MY-PROJECTS</h3>
        <div className="projects-container">
          <a href="/">
            <img src={template} alt="" />
            <p>Template-Project-1</p>
          </a>
          <a href="/">
            <img src={template} alt="" />
            <p>Template-Project-2</p>
          </a>
          <a href="/">
            <img src={template} alt="" />
            <p>Template-Project-3</p>
          </a>
          <a href="/">
            <img src={template} alt="" />
            <p>Template-Project-4</p>
          </a>
        </div>
      </div>
      <hr />
      <div className="working-on">
        <h3 className="sub-heading">WORKING-ON</h3>
        <div>
          <p>
            I’m currently working on projects to fill out my portfolio.
            Something I have always wanted to work on is a dev blog which I will
            make as an extension of my portfolio. I will keep updating my
            progress on my twitter @dperkinsdev. I also want to make projects
            involving crypto APIs since I want to learn more about crypto and
            NFTs in general. I also want to discover the world of Web 3 as it
            becomes more mainstream and more guides are released.
          </p>
          <img src={web3logo} alt="" />
        </div>
      </div>
    </RightSideContainer>
  );
};

export default RightSide;
