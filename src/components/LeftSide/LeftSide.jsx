import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TwitterTimelineEmbed } from "react-twitter-embed";

import { LeftSideContainer } from "./Styles";

const LeftSide = () => {
  return (
    <LeftSideContainer>
      <div className="about-me">
        <h3 className="sub-heading">ABOUT-ME</h3>
        <p className="about-text">
          I am an aspiring software developer working mainly in frontend with
          ReactJS. I am currently 15 doing my GCSEs. I aim to complete Maths,
          Further Maths, Physics and Computer Science for A-Levels and move into
          an apprenticeship instead of going to University and studying Computer
          Science. I have been intrigued by computers from a young age. I
          started coding in Python at 11 (Year 7).
        </p>
        <div className="contact-info">
          <a href="/" className="download-button">
            <FontAwesomeIcon icon="fas fa-download" />
            <p>Download My Resume</p>
          </a>
          <a href="/" className="email-button">
            <FontAwesomeIcon icon="fas fa-square-envelope" />
            <p>danperkinscs@gmail.com</p>
          </a>
        </div>
      </div>
      <hr />
      <div className="my-skills">
        <h3 className="sub-heading">MY-SKILLS</h3>
        <div className="skills-logos">
          <FontAwesomeIcon icon="fab fa-html5" />
          <FontAwesomeIcon icon="fab fa-css3-alt" />
          <FontAwesomeIcon icon="fab fa-js" />
          <FontAwesomeIcon icon="fab fa-node-js" />
          <FontAwesomeIcon icon="fab fa-react" />
          <FontAwesomeIcon icon="fab fa-python" />
          <FontAwesomeIcon icon="fab fa-figma" />
          <FontAwesomeIcon icon="fab fa-git-alt" />
        </div>
      </div>
      <hr />
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="dperkinsdev"
        options={{ height: 300 }}
        noHeader={true}
        noFooter={true}
      />
    </LeftSideContainer>
  );
};

export default LeftSide;
