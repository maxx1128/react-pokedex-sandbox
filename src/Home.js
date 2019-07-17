import React from "react";
import RandomPokemonLink from "./components/poke-listing/RandomPokemonLink";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <p>Homepage!</p>

        <RandomPokemonLink />
      </React.Fragment>
    );
  }
}

export default Home;
