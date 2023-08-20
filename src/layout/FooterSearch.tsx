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
            <div className="footer-search-form">
              <input type="text" placeholder="Find a movie" />
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
  .footer-search-form {
    width: 600px;
    margin: 2.7rem auto;
    input {
      background-color: transparent;
      margin: 0 auto;
      padding: 12px 14px;
      width: 100%;
      outline: none;
      border: 1px solid gray;
      border-radius: 8px;
      ::placeholder {
        color: #fff;
      }
      :focus {
        border: 1px solid #fff;
        ::placeholder {
          color: gray;
        }
      }
    }
  }
`;
