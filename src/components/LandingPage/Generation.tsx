import React from "react";
import styled from "styled-components";
import { MovieProps } from "../../types";
import { fetchMovieImg } from "../../utils/axios";

export default function GenerationMovies({ movies }: { movies: MovieProps[] }) {
  return (
    <Wrapper>
      <div className="mt-5 py-5">
        <div className="row mx-auto">
          <div className="col-9 mx-auto">
            <h1 className="display-1 text-center">
              New Generation Of Watching Movies.
            </h1>
          </div>
        </div>

        {/* CURVED IMAGES */}
        <div className="curved-box"></div>
        <div className="curved-images">
          {movies.slice(0, 3).map((movie) => (
            <div
              className="curved-image"
              style={{
                backgroundImage: `url(${fetchMovieImg(movie?.backdrop_path)})`,
              }}
            >
              <h1 className="text-center">{movie?.original_title}</h1>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  /* .curved-box {
    width: 100%;
    height: 100px;
    background-color: red;
    border-radius: 0% 0% 135% 135% / 0% 0% 255% 255%;
  } */
  .curved-images {
    display: flex;
    flex-flow: row;
    width: 100%;
    /* -webkit-mask-image: radial-gradient(
      110% 50% at bottom,
      transparent 50%,
      #fff 51%
    ); */
    mask-image: radial-gradient(
      110% 50% at top,

      transparent 50%,
      #fff 51%
    );
    .curved-image {
      height: 500px;
      width: 100%;
      margin: 0 10px;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    }
  }
`;
