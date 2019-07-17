import React from "react";
import { Link } from "@reach/router";
import PokemonImage from "../poke-profile/PokemonImage";

const PokemonProfileLink = ({ id, name }) => (
  <Link to={`/pokemon/${id}`}>
    <h3>{name}</h3>
    <PokemonImage id={id} name={name} />
  </Link>
);

export default PokemonProfileLink;
