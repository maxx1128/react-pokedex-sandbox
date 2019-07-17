import React from "react";
import API, { apiLimit } from "../../services/apiRequest";
import PokemonProfileLink from "./PokemonProfileLink";

class RandomPokemonLink extends React.Component {
  state = {
    loading: true,
    name: "",
    id: 0
  };

  componentDidMount() {
    const randomID = Math.floor(Math.random() * apiLimit + 1);

    API("pokemon", randomID).then(res => {
      const poke_data = res.data;
      this.setState({
        loading: false,
        name: poke_data.name,
        id: randomID
      });
    });
  }

  render() {
    return <PokemonProfileLink id={this.state.id} name={this.state.name} />;
  }
}

export default RandomPokemonLink;
