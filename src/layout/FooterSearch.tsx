import React from "react";
import styled from "styled-components";

export default function FooterSearch() {
  return (
    <Wrapper>
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <div className="text-center">
              <p className="lead">Search</p>
              <h1 className="display-1">
                Looking for new movie information and casts?
              </h1>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #000;
  padding: 5rem 0;
`;
