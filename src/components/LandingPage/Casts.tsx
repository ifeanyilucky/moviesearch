import React, { Component } from "react";
import styled from "styled-components";

export default class Casts extends Component {
  casts = new Array(10).fill(10);
  render() {
    return (
      <Wrapper>
        <div>Casts</div>
        <div className="casts">
          {this.casts.map(() => (
            <div className="cast-img"></div>
          ))}
        </div>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  .casts {
    display: flex;
    flex-flow: row;
    align-items: center;
  }
`;
