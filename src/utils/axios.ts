import axios from 'axios';
import config from '../config';

const api = axios.create({ baseURL: `https://api.themoviedb.org/3` });

export const fetchPopularMovies = () =>
  api.get(`/movie/popular?api_key=${config.apiKey}&language=en-US`);

export const getCredits = (movieId: string | undefined) =>
  api.get(`/movie/${movieId}/credits?api_key=${config.apiKey}`);

export const fetchSimilarMovies = (movieId: string | undefined) =>
  api.get(`/movie/${movieId}/similar?api_key=${config.apiKey}&language=en-US`);

export const fetchSingleMovie = (id: string | undefined) =>
  api.get(`/movie/${id}?api_key=${config.apiKey}&language=en-US`);

export const getMovieVideo = (movieId: string | undefined) =>
  api.get(`/movie/${movieId}/videos?${config.apiKey}&language=en-US`);

export const fetchMovieImg = (pathName: string) =>
  `https://image.tmdb.org/t/p/original/${pathName}`;

export const searchMovies = (keyword: string) =>
  api.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${config.apiKey}&language=en-US&page=1&include_adult=false&query=${keyword}`
  );
