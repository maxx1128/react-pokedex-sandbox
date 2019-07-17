import React from "react";
import Abilities from "./components/poke-profile/Abilities";
import EvolutionChain from "./components/poke-profile/EvolutionChain";
import Types from "./components/poke-profile/Types";
import Shape from "./components/poke-profile/Shape";

import API from "./services/apiRequest";
import pullID from "./services/getIndexFromUrl";

class Pokemon extends React.Component {
  state = {
    loading: true,
    pokemon: {},
    pokemonSpecies: {}
  };

  componentDidMount() {
    this.updatePokemonInfo();
  }

  updatePokemonInfo() {
    const pokemonRequest = API("pokemon", this.props.id),
      pokemonSpeciesRequest = API("pokemon-species", this.props.id);

    Promise.all([pokemonRequest, pokemonSpeciesRequest]).then(results => {
      this.setState({
        loading: false,
        pokemon: results[0].data,
        pokemonSpecies: results[1].data
      });
    });
  }

  shouldComponentUpdate() {
    this.updatePokemonInfo();
    return true;
  }

  render() {
    if (this.state.loading) {
      return <h1>Loading, one moment!</h1>;
    }

    const {
      abilities,
      held_items,
      moves,
      name,
      id,
      sprites,
      stats,
      types,
      weight
    } = this.state.pokemon;
    const {
      color,
      evolution_chain,
      flavor_text_entries,
      genera,
      generation,
      growth_rate,
      shape
    } = this.state.pokemonSpecies;

    return (
      <React.Fragment>
        <h3>
          #{id}: {name}
        </h3>

        <img
          src={sprites.front_default}
          alt={`Default front sprite for ${name}`}
        />

        <Abilities abilities={abilities} />
        <Types types={types} />
        <Shape shape={shape} />
        <EvolutionChain id={pullID(evolution_chain.url)} />
      </React.Fragment>
    );
  }
}

export default Pokemon;
