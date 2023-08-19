import React from "react";
import styled from "styled-components";
import { MovieProps } from "../../types";
import { fetchMovieImg } from "../../utils/axios";
import { PlayIcon } from "../../Icons";
import VideoModal from "../VideoModal";

export default function GenerationMovies({ movies }: { movies: MovieProps[] }) {
  const [currentSlide, setCurrentSlide] = React.useState(1);
  const [showVideo, setShowVideo] = React.useState(false);
  const [movieId, setMovieId] = React.useState("");
  return (
    <Wrapper>
      {/* {showVideo && movieId ? (
        <VideoModal show={showVideo} movieId={movieId} setShow={setShowVideo} />
      ) : (
        ""
      )} */}
      <div className="container">
        <div className="mt-5 py-5">
          <h4>New Generation Of Watching Movies.</h4>
        </div>
        <div className="slider">
          {movies.map((movie: MovieProps) => (
            <div className="movie-card">
              <div
                className="movie-card-image"
                style={{
                  backgroundImage: `url(${fetchMovieImg(movie.backdrop_path)})`,
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-top: 3rem;

  .slider {
    display: flex;
    gap: 15px;
    overflow-x: scroll;
    overflow-y: hidden;
    width: 100%;
    .movie-card {
      min-width: 550px;

      .movie-card-image {
        height: 360px;
        border-radius: 10px;
        width: 100%;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        cursor: pointer;
        transition: 0.29s border ease-in-out;
        border: 2px solid transparent;
        :hover {
          border: 2px solid #fff;
        }
      }
    }
  }
`;
