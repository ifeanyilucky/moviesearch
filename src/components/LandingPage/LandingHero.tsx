// import LandingHero from "../"
import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { fetchMovieImg } from "../../utils/axios";
import LandingSidebar from "../LandingPage/LandingSidebar";
import Navbar from "../../layout/Navbar";
import { MovieProps } from "../../types";
import Image from "../Image";
import { PlayIcon } from "../../Icons";

export default function LandingHero({
  popularMovies,
  trendingMovies,
}: {
  popularMovies: MovieProps[];
  trendingMovies: MovieProps[];
}) {
  const [currentMovie, setCurrentMovie] = useState(0);

  const [sliderIndex, setSliderIndex] = useState<number>(4);
  const navigate = useNavigate();

  // Automatically switch movie background
  const timeoutRef: React.MutableRefObject<null | number> = useRef(null);
  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = window.setTimeout(() => {
      setCurrentMovie((current) => {
        if (current === 2) {
          return 0;
        } else {
          return current + 1;
        }
      });
    }, 10000);
    return () => {
      resetTimeout();
    };
  }, [currentMovie]);

  return (
    <Wrapper
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.2) ),  url("${fetchMovieImg(
          popularMovies[currentMovie]?.backdrop_path
        )}")`,
      }}
    >
      <div className="container pt-md-5">
        <div className="row mt-5">
          <div className="col-md-6 pt-5">
            <div>
              <div className="chip small">New Movie</div>

              <h2 className="display-3 py-2">
                {popularMovies[currentMovie]?.original_title}
              </h2>
              <p>{popularMovies[currentMovie]?.overview}</p>

              <div className="py-2">
                <button className="button" onClick={() => {}}>
                  Watch Thriller <PlayIcon />
                </button>
                <button
                  className="button transparent"
                  onClick={() =>
                    navigate(`/${popularMovies[currentMovie]?.id}`)
                  }
                >
                  More Info
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6 align-items-end position-relative mt-sm-5 pt-sm-5">
            <div className="indicator">
              {[0, 1, 2].map((item) => (
                <div
                  onClick={() => setCurrentMovie(item)}
                  style={{
                    backgroundColor:
                      currentMovie === item
                        ? "rgba(255, 255, 255, 1)"
                        : "rgba(255, 255, 255, 0.5)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* TRENDING NOW */}
        <div className="trending-now mt-5">
          <div className="d-flex justify-content-between align-items-center my-3">
            <h4>Trending Now</h4>
            <button className="button sm transparent">See more</button>
          </div>

          {/* Trend cards */}
          <div className="trend-cards pt-3">
            {trendingMovies?.slice(0, 15).map((movie) => (
              <div className="trend-card" key={movie?.id}>
                <div
                  className="trend-image"
                  style={{
                    backgroundImage: `url(${fetchMovieImg(
                      movie?.backdrop_path
                    )})`,
                  }}
                >
                  <span className="chip small">
                    {movie.genres && movie?.genres[currentMovie]?.name}
                  </span>
                </div>
                <h5 className="mt-3">{movie?.title}</h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
  min-height: 500px;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  .indicator {
    display: flex;
    flex-flow: row;
    position: absolute;
    bottom: 0;
    right: 0;
    div {
      height: 3.5px;
      width: 60px;
      border-radius: 20px;
      margin: 0 5px;
      cursor: pointer;
    }
    @media (max-width: 768px) {
      left: 0;
    }
  }
  .trending-now {
    .trend-cards {
      display: flex;
      flex-flow: row;
      justify-content: space-between;
      overflow-x: scroll;
      width: 100%;

      .trend-card {
        margin: 0 15px;
        min-width: 300px;
        width: 300px;

        .trend-image {
          height: 160px;
          padding: 10px;
          width: 100%;
          background-color: #fff;
          border-radius: 18px;
          background-size: cover;
          background-position: center;
        }
      }

      /* scroll bar styling */
      ::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        background-color: #f5f5f5;
        border-radius: 10px;
      }
      ::-webkit-scrollbar {
        height: 7px;
        background-color: #f5f5f5;
        display: none;
      }
      ::-webkit-scrollbar-thumb {
        background-color: red;
        border-radius: 10px;
        background-image: -webkit-linear-gradient(
          0deg,
          rgba(255, 255, 255, 0.5) 25%,
          transparent 25%,
          transparent 50%,
          rgba(255, 255, 255, 0.5) 50%,
          rgba(255, 255, 255, 0.5) 75%,
          transparent 75%,
          transparent
        );
      }
    }
    @media (max-width: 768px) {
      .trend-cards {
        overflow-x: scroll;
        .trend-card {
          flex: 50%;
          margin: 0 8px;
        }
      }
    }
  }
`;
