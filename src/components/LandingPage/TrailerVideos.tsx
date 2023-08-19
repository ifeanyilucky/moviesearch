import React from "react";
import styled from "styled-components";
import { PlayIcon } from "../../Icons";

export default class TrailerVideos extends React.Component {
  movies = new Array(10).fill(10);
  render() {
    return (
      <Wrapper>
        <div className="container">
          <div className="pb-5 mb-md-4">
            <h1 className="extra-large">
              <span style={{ color: "red" }}> Watch</span>
              <br />
              <span>Latest trailer's video.</span>
            </h1>
            <p className="lead">Explore free trailers and search for movies.</p>
          </div>
        </div>
        <div className="slide">
          {this.movies.map((movie) => (
            <div className="trailer-card">
              <div className="head">
                <PlayIcon />
              </div>
              <div className="content px-2">
                <p className="text-muted">
                  <small>MOVIE {movie}</small>
                </p>
                <p className="lead">Movie Name</p>
              </div>
            </div>
          ))}
        </div>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  background: #fff;
  color: #000;
  width: 100%;

  padding: 5rem 0;
  .extra-large {
    font-size: 96px;
  }
  .slide {
    display: flex;
    overflow-x: scroll;
  }
  .trailer-card {
    margin: 0 7px;
    width: 380px;
    min-width: 380px;

    cursor: pointer;
    .head {
      border-radius: 14px;
      height: 200px;
      background-color: red;
      width: 100%;
      border: 2px solid transparent;
      transition: 0.29s border ease-in-out;
      :hover {
        border: 2px solid #000;
      }
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
    }
  }
`;
