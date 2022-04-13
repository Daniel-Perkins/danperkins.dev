import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./styles/index.scss";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas, faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

library.add(fas, faSquareEnvelope, faTwitter, faLinkedin, faGithub);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
