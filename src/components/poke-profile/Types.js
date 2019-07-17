import React from "react";
import { Link } from "@reach/router";

const Types = ({ types }) => (
  <React.Fragment>
    <h3>Types!</h3>

    <ul>
      {types.map((type, i) => {
        return (
          <li key={i}>
            <Link to={`/type/${type.type.name}`}>
              {type.type.name}
            </Link>
          </li>
        );
      })}
    </ul>
  </React.Fragment>
);

export default Types;
