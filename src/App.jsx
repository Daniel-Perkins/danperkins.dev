import React from "react";
import { GlobalStyle } from "./style";

import Header from "./components/Header/Header";
import LeftSide from "./components/LeftSide/LeftSide";
import RightSide from "./components/RightSide/RightSide";

import "./components/FontAwesomeIcons/index";

function App() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Header />
      <main>
        <LeftSide />
        <RightSide />
      </main>
    </React.Fragment>
  );
}

export default App;
