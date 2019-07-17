import React from "react";
import PokemonProfileLink from "./../poke-listing/PokemonProfileLink";

const EvolutionChainProfile = ({ id, name, details }) => (
  <div>
    <PokemonProfileLink id={id} name={name} />
    <p>
      {details}
    </p>
  </div>
);

export default EvolutionChainProfile;
