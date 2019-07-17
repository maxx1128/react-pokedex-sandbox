/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

const imgStyles = css`
  max-width: 100%;
  height: auto;
`;

const PokemonImage = ({ id, name }) => (
  <img
    css={imgStyles}
    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
    alt={`Image of ${name}`}
  />
);

export default PokemonImage;
