/** @jsx jsx */
import React from "react";
import EvolutionChainProfile from "./EvolutionChainProfile";
import { css, jsx } from "@emotion/core";

import API from "./../../services/apiRequest";
import EvolutionDecorator from "./../../decorators/EvolutionChain";

const wrapperStyles = css`
  display: flex;
  align-items: center;
`;

const stageStyles = css`
  display: flex;
  margin: 0 2rem;
  flex-direction: column;

  text-align: center;
`;

class EvolutionChain extends React.Component {
  state = {
    loading: true,
    data: {}
  }

  componentDidMount() {
    const evolutionRequest = API('evolution-chain', this.props.id);

    evolutionRequest.then(results => {
      this.setState({
        loading: false,
        data: EvolutionDecorator(results.data.chain)
      });
    });
  }

  render() {
    if (this.state.loading) { return (
      <p>Loading!</p>
    ) }

    return (
      <div css={wrapperStyles}>
        {this.state.data.map((stage, i) => {
          return (
            <div css={stageStyles} key={i}>
              {stage.map((poke, i) =>
                <EvolutionChainProfile key={i} id={poke.id} name={poke.name} details={poke.evolution_details} />
              )}
            </div>
          );
        })}
      </div>
    )
  }
};

export default EvolutionChain;
