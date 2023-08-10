import React from "react";
import GenerationMovies from "../components/LandingPage/Generation";
import LandingHero from "../components/LandingPage/LandingHero";
import { fetchPopularMovies } from "../utils/axios";
import { MovieProps } from "../types";

export default function HomePage() {
  const [movies, setMovies] = React.useState<Array<MovieProps>>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
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
  return (
    <>
      <LandingHero movies={movies} />
      <GenerationMovies movies={movies} />
    </>
  );
}
