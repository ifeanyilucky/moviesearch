import React from "react";
import styled from "styled-components";
import { MovieProps } from "../../types";
import { fetchMovieImg } from "../../utils/axios";
import { PlayIcon } from "../../Icons";

export default function GenerationMovies({ movies }: { movies: MovieProps[] }) {
  const [currentSlide, setCurrentSlide] = React.useState(1);
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
        <div className="curved-box">
          <div className="curved-images">
            {movies.slice(0, 3).map((movie) => (
              <div
                className="curved-image p-2"
                style={{
                  backgroundImage: `url(${fetchMovieImg(
                    movie?.backdrop_path
                  )})`,
                }}
              >
                <div className={"d-flex  align-items-center h-100 text-center"}>
                  <h3 className="text-center">{movie?.original_title}</h3>
                </div>
                <div className="image-footer text-center pt-3">
                  <div className="d-flex align-items-center justify-content-around text-center">
                    {/* <PlayIcon /> */}

                    <p>Watch The Thriller</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-top: 3rem;
  .curved-box {
    mask-image: radial-gradient(120% 50% at bottom, transparent 50%, #fff 51%);
    margin-top: -5rem;
  }
  .curved-images {
    display: flex;
    flex-flow: row;
    width: 100%;
    height: 600px;
    -webkit-mask-image: radial-gradient(
      130% 50% at top,
      transparent 50%,
      #fff 51%
    );
    mask-image: radial-gradient(130% 50% at top, transparent 50%, #fff 51%);
    .curved-image {
      height: 100%;
      width: 100%;
      position: relative;
      &:nth-child(2) {
        margin: 0 10px;
      }
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;

      .image-footer {
        background-color: red;
        position: absolute;
        left: 0;
        bottom: 10px;
        height: 200px;
        width: 100%;
      }
    }
  }
`;
