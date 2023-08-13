import React from "react";
import styled from "styled-components";
import { MovieProps } from "../../types";
import { fetchMovieImg } from "../../utils/axios";

export default function MovieCast({ movies }: { movies: MovieProps[] }) {
  return (
    <Wrapper>
      <div className="movie">
        <div
          className="movie-img"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,1) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,1) 100%), url(${fetchMovieImg(
              movies[1]?.backdrop_path
            )})`,
          }}
        >
          <div className="container h-100">
            <div className="row h-100 align-items-center">
              <div className="col-8 mx-auto text-center">
                <h1 className="display-1">Watch amazing trailers on MovieDb</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  margin: 3rem 0;
  .movie {
    height: 600px;
  }
  .movie-img {
    height: 100%;
    width: 100%;
    background-size: cover;
  }
`;
