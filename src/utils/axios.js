import axios from 'axios';
import config from '../config';

const api = axios.create({ baseURL: `https://api.themoviedb.org/3` });

export const fetchPopularMovies = () =>
  api.get(`/movie/popular?api_key=${config.apiKey}&language=en-US`);

export const getCredits = (movieId) =>
  api.get(`/movie/${movieId}/credits?api_key=${config.apiKey}`);

export const fetchSimilarMovies = (movieId) =>
  api.get(`/movie/${movieId}/similar?api_key=${config.apiKey}&language=en-US`);

export const fetchSingleMovie = (id) =>
  api.get(`/movie/${id}?api_key=${config.apiKey}&language=en-US`);

export const getMovieVideo = (movieId) =>
  api.get(`/movie/${movieId}/videos?${config.apiKey}&language=en-US`);

export const fetchMovieImg = (pathName) =>
  `https://image.tmdb.org/t/p/original/${pathName}`;
