// import LandingHero from "../"
import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import LazyLoad from "react-lazyload";
import { fetchPopularMovies, fetchMovieImg } from "../utils/axios";
import LandingSidebar from "../components/LandingPage/LandingSidebar";
import Navbar from "../layout/Navbar";
import { MovieProps } from "../types";
import Image from "../components/Image";

export default function HomePage() {
  const [movies, setMovies] = useState<Array<MovieProps>>([]);
  const [currentMovie, setCurrentMovie] = useState(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [sliderIndex, setSliderIndex] = useState<number>(4);
  const navigate = useNavigate();

  useEffect(() => {
    const getMovies = async () => {
      setIsLoading(true);
      try {
        const { data } = await fetchPopularMovies();
        console.log(data);
        setMovies(data?.results);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    getMovies();
  }, []);

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
    }, 3000);
    return () => {
      resetTimeout();
    };
  }, [currentMovie]);

  return (
    <Wrapper
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.2) ),  url("${fetchMovieImg(
          movies[currentMovie]?.backdrop_path
        )}")`,
      }}
    >
      <div className="container pt-md-5">
        <div className="row mt-5">
          <div className="col-md-6 pt-5">
            <div>
              <div className="chip small">New Movie</div>

              <h2 className="display-3">
                {movies[currentMovie]?.original_title}
              </h2>
              <p>{movies[currentMovie]?.overview}</p>

              <div>
                <button className="button">Watch Thriller</button>
                <button
                  className="button transparent"
                  onClick={() => navigate(`/${movies[currentMovie]?.id}`)}
                >
                  More Info
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-6 align-items-end position-relative">
            <div className="indicator">
              {[0, 1, 2].map((item) => (
                <div
                  onClick={() => setCurrentMovie(0)}
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
          <div className="trend-cards">
            {movies.slice(1, 4).map((movie) => (
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
  }
  .trending-now {
    .trend-cards {
      display: flex;
      flex-flow: row;
      justify-content: space-between;

      .trend-card {
        margin: 0 15px;
        flex: 33%;

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
    }
  }
`;
