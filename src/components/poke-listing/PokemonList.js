/** @jsx jsx */
import PokemonProfileLink from "./PokemonProfileLink";
import { css, jsx } from "@emotion/core";

const pokeListStyles = css`
  display: flex;
  padding: 0;
  margin: 0;
  flex-wrap: wrap;

  list-style-type: none;

  li {
    padding: 1rem;
    margin: 0;
  }
`;

const PokemonList = ({ pokemon }) => (
  <ul css={pokeListStyles}>
    {pokemon
      .sort((a, b) =>
        parseInt(a.id) > parseInt(b.id)
      ).map((pokemon, i) => (
        <li key={i}>
          <PokemonProfileLink id={pokemon.id} name={pokemon.name} />
        </li>
      ))}
  </ul>
);

export default PokemonList;
