import React from "react";
import API from "./services/apiRequest";
import PokemonFilterPage from "./components/poke-listing/PokemonFilterPage";

const TypePage = ({ type }) => (
  <PokemonFilterPage APIPromise={API("type", type)} name={type} />
);

export default TypePage;
