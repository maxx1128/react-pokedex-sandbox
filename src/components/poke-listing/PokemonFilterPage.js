import React from "react";
import PokemonFilter from "./PokemonFilter";

class PokemonFilterPage extends React.Component {
  state = {
    loading: true,
    data: {}
  };

  componentDidMount() {
    const { APIPromise } = this.props;

    APIPromise.then(results => {
      this.setState({
        loading: false,
        data: results.data
      });
    });
  }

  render() {
    if (this.state.loading) {
      return <h1>Loading, one moment!</h1>;
    }

    const { pokemon, pokemon_species } = this.state.data,
          { name }    = this.props,
          pokemonData = pokemon_species || pokemon;

    const pokemonForFilter = pokemonData.map(pokemon => {
      const item = pokemon.pokemon || pokemon,
            url = item.url.slice(0, -1);

      return {
        name: item.name,
        id: url.substr(url.lastIndexOf("/") + 1)
      };
    });

    return (
      <React.Fragment>
        <h1>{name}</h1>

        <PokemonFilter pokemon={pokemonForFilter} />
      </React.Fragment>
    );
  }
}

export default PokemonFilterPage;
