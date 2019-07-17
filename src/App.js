/** @jsx jsx */
import React from "react";
import { Router, Link } from "@reach/router";
import { css, jsx } from "@emotion/core";

import Home from "./Home";
import Pokemon from "./Pokemon";
import Ability from "./Ability";
import Type from "./Type";
import Shape from "./Shape";
import colors from "./styles/colors";

const navStyles = css`
  padding: 1rem;

  background-color: ${colors.primary.darker};

  a {
    color: ${colors.mono.lighter};
  }
`;

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <nav className={"nav"} css={navStyles}>
          <Link to="/">Homepage</Link>
        </nav>

        <Router>
          <Home path="/" />
          <Pokemon path="/pokemon/:id" />
          <Ability path="/ability/:ability" />
          <Type path="/type/:type" />
          <Shape path="/shape/:shape" />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
