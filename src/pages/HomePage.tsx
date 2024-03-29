import React, { useEffect } from "react";
import GenerationMovies from "../components/LandingPage/Generation";

import { LandingHero, TrailerVideos, Casts } from "../components/LandingPage";

import { fetchPopularMovies, fetchTrendingMovies } from "../utils/axios";
import { MovieProps } from "../types";

export default function HomePage() {
  const [popularMovies, setPopularMovies] = React.useState<Array<MovieProps>>(
    []
  );
  const [trendingMovies, setTrendingMovies] = React.useState<Array<MovieProps>>(
    []
  );
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    Promise.all([fetchPopularMovies(), fetchTrendingMovies()]).then(
      ([popular, trending]) => {
        setPopularMovies(popular.data?.results);
        setTrendingMovies(trending.data?.results);
        setIsLoading(false);
      }
    );
  }, []);
  console.log(trendingMovies);
  console.log(popularMovies);
  return (
    <>
      {isLoading ? (
        <h4>Loading...</h4>
      ) : (
        <>
          <LandingHero
            popularMovies={popularMovies}
            trendingMovies={trendingMovies}
          />
          <GenerationMovies movies={popularMovies} />
        </>
      )}
      <Casts />
      <TrailerVideos />
    </>
  );
}
