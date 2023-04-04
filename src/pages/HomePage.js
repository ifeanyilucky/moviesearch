// import LandingHero from "../"
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { fetchPopularMovies, fetchMovieImg } from '../utils/axios';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [sliderIndex, setSliderIndex] = useState(4);

  useEffect(() => {
    const getMovies = async () => {
      setIsLoading(true);
      try {
        const { data } = await fetchPopularMovies();
        console.log(data);
        setMovies(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    getMovies();
  }, []);

  return (
    <Wrapper>
      {!movies.results ? (
        <h2>Is Loading...</h2>
      ) : (
        <section className='container mt-5 text-white'>
          <div
            className='hero-card'
            style={{
              backgroundImage: `linear-gradient(to top, rgba(0, 0, 0 , 1), transparent) , url(${fetchMovieImg(
                movies?.results[sliderIndex]?.backdrop_path
              )})`,
            }}
          >
            <h3>{movies?.results[sliderIndex]?.title}</h3>
          </div>
          <div className='row my-5'>
            <div className='col-md-6'>
              <div className='category-card'>
                <div className='backdrop'>
                  <h3>Halloween movies</h3>
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div className='category-card'>
                <div className='backdrop'>
                  <h2>New year's movies</h2>
                </div>
              </div>
            </div>
          </div>
          <div className='row my-5'>
            {movies.results.map((movie) => (
              <div className='col-md-3 my-2' key={movie?.id}>
                <Link to={`/${movie?.id}`}>
                  <div className='poster-card'>
                    <div className='poster-img'>
                      <img src={`${fetchMovieImg(movie.poster_path)}`} />
                    </div>
                    <h5 className='py-2'>{movie.original_title}</h5>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .poster-card {
    cursor: pointer;
    .poster-img {
      height: 350px;
      width: 100%;
      border-radius: 20px;
      overflow: hidden;
      img {
        transition: all 0.5s ease-in-out;
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
      :hover img {
        transform: scale(1.3);
      }
    }
  }
  .hero-card {
    height: 400px;
    width: 100%;
    border-radius: 20px;
    background-size: cover;
    display: flex;
    align-items: flex-end;
    padding: 2rem;
  }
  .category-card {
    height: 200px;
    width: 100%;
    /* background-color: #232323; */
    background-size: cover;
    border-radius: 20px;
    &:nth-child(1) {
      background-image: url('/static/images/halloween-image.jpg');
    }
    &:nth-child(2) {
      background-image: url('/static/images/new-year-image.jpg');
    }
    .backdrop {
      display: flex;
      align-items: center;
      justify-content: space-around;
      backdrop-filter: blur(5px);
      padding: 1rem;
      height: 100%;
      width: 100%;
    }
  }
`;
