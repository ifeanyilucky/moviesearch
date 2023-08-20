import React from "react";
import styled from "styled-components";
import { PlayIcon } from "../../Icons";
import Slider from "react-slick";

export default class TrailerVideos extends React.Component {
  movies = new Array(10).fill(10);

  slideSettings = {
    className: "center",
    centerMode: true,
    infinite: false,
    // centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };
  render() {
    return (
      <Wrapper>
        <div className="container">
          <div className="pb-5 mb-md-4">
            <h1 className="display-1">
              <span style={{ color: "red" }}> Watch</span>
              <br />
              <span>Latest trailer's video.</span>
            </h1>
            <p className="lead">Explore free trailers and search for movies.</p>
          </div>
        </div>

        <Slider {...this.slideSettings} centerPadding="30px">
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
        </Slider>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  background: #fff;
  color: #000;
  width: 100%;
  overflow-x: hidden !important;
  padding: 5rem 0;
  .extra-large {
    font-size: 96px;
  }
  .slide {
    display: flex;
    overflow-x: scroll;
  }
  .trailer-card {
    /* margin: 0 10px; */

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
