import { HeaderContainer } from "./Styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const photo = require("../../assets/photo.png");

const Header = () => {
  return (
    <HeaderContainer>
      <h1 className="name">
        DAN
        <br />
        PERKINS
      </h1>
      <img src={photo} alt="Photo of myself" className="photo" />
      <div className="social-logos">
        <a href="https://github.com/Daniel-Perkins">
          <FontAwesomeIcon icon="fab fa-github" className="github-logo" />
        </a>
        <a href="https://twitter.com/dperkinsdev">
          <FontAwesomeIcon icon="fab fa-twitter" className="twitter-logo" />
        </a>
        <a href="#">
          <FontAwesomeIcon icon="fab fa-linkedin" className="linkedin-logo" />
        </a>
        {/* Need to implement email sending feature */}
        <a href="#">
          <FontAwesomeIcon
            icon="fas fa-square-envelope"
            className="email-logo"
          />
        </a>
      </div>
    </HeaderContainer>
  );
};

export default Header;
