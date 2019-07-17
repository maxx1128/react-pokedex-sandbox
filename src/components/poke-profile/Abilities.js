import React from "react";
import { Link } from "@reach/router";

const Abilities = ({ abilities }) => (
  <React.Fragment>
    <h3>Abilities!</h3>

    <ul>
      {abilities.map((ability, i) => {
        return (
          <li key={i}>
            <Link to={`/ability/${ability.ability.name}`}>
              {ability.ability.name}
            </Link>{" "}
            {ability.is_hidden ? "hidden" : "not hidden"}
          </li>
        );
      })}
    </ul>
  </React.Fragment>
);

export default Abilities;
