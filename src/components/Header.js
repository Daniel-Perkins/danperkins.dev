import "../styles/header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const photo = require("../assets/photo.png");

const Header = () => {
  return (
    <div className="Header">
      <h1 className="name">
        DAN
        <br />
        PERKINS
      </h1>
      <img src={photo} alt="Photo of myself" className="photo" />
      <div className="social-logos">
        <a href="https://github.com/Daniel-Perkins">
          <FontAwesomeIcon icon="fa-brands fa-github" className="github-logo" />
        </a>
        <a href="https://twitter.com/dperkinsdev">
          <FontAwesomeIcon
            icon="fa-brands fa-twitter"
            className="twitter-logo"
          />
        </a>
        <a href="#">
          <FontAwesomeIcon
            icon="fa-brands fa-linkedin"
            className="linkedin-logo"
          />
        </a>
        {/* Need to implement email sending feature */}
        <a href="#">
          <FontAwesomeIcon
            icon="fa-solid fa-square-envelope"
            className="email-logo"
          />
        </a>
      </div>
    </div>
  );
};

export default Header;
