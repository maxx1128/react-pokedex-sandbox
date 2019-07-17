import React from "react";
import API from "./services/apiRequest";
import PokemonFilterPage from "./components/poke-listing/PokemonFilterPage";

const AbilityPage = ({ ability }) => (
  <PokemonFilterPage APIPromise={API("ability", ability)} name={ability} />
);

export default AbilityPage;
