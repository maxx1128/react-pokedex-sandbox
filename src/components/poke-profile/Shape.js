import React from "react";
import { Link } from "@reach/router";

const Shape = ({ shape }) => (
  <React.Fragment>
    <h3>Shape!</h3>

    <Link to={`/shape/${shape.name}`}>
      {shape.name}
    </Link>
  </React.Fragment>
);

export default Shape;
