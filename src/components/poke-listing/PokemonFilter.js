import React from "react";
import PokemonList from "./PokemonList";
import { apiLimit } from "../../services/apiRequest";

// Add extra filter to ensure no pokemon with IDs higher than the limit are returned

class PokemonFilter extends React.Component {
  state = {
    searchTerm: ""
  };

  updateSearch = e => {
    this.setState({
      searchTerm: e.target.value
    });
  };

  render() {
    const { pokemon } = this.props,
          filteredPokemon = pokemon.filter(pokemon => pokemon.name
                                      .toLowerCase()
                                      .includes(this.state.searchTerm.toLowerCase())
                                    ).filter(pokemon => pokemon.id < apiLimit);

    return (
      <React.Fragment>
        <input
          type="text"
          onChange={this.updateSearch}
          value={this.state.searchTerm}
        />

        <PokemonList pokemon={filteredPokemon} />
      </React.Fragment>
    );
  }
}

export default PokemonFilter;
