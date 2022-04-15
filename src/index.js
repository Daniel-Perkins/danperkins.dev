import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./styles/index.scss";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fas,
  faSquareEnvelope,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faLinkedin,
  faGithub,
  faHtml5,
  faCss3Alt,
  faJs,
  faNodeJs,
  faReact,
  faPython,
  faFigma,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  fas,
  faSquareEnvelope,
  faDownload,
  faTwitter,
  faLinkedin,
  faGithub,
  faHtml5,
  faCss3Alt,
  faJs,
  faNodeJs,
  faReact,
  faPython,
  faFigma,
  faGitAlt
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
