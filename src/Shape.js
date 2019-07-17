import React from "react";
import API from "./services/apiRequest";
import PokemonFilterPage from "./components/poke-listing/PokemonFilterPage";

const ShapePage = ({ shape }) => (
  <PokemonFilterPage APIPromise={API("pokemon-shape", shape)} name={shape} />
);

export default ShapePage;
