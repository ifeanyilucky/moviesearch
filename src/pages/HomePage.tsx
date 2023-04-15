// import LandingHero from "../"
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import LazyLoad from 'react-lazyload';
import { fetchPopularMovies, fetchMovieImg } from '../utils/axios';
import LandingSidebar from '../components/LandingPage/LandingSidebar';
import Navbar from '../layout/Navbar';
import { MovieProps } from '../types';
import Image from '../components/Image';

export default function HomePage() {
  const [movies, setMovies] = useState<Array<MovieProps>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [sliderIndex, setSliderIndex] = useState<number>(4);

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

  return (
    <Wrapper className='container-fluid'>
      <div className='row'>
        <div className='col-md-8'>
          {!movies ? (
            <h2>Is Loading...</h2>
          ) : (
            <section className='container position-relative text-white'>
              <div
                className='hero-card mt-5'
                style={{
                  backgroundImage: `linear-gradient(to top, rgba(0, 0, 0 , 1), transparent) , url(${fetchMovieImg(
                    movies[sliderIndex]?.backdrop_path
                  )})`,
                }}
              >
                <h3>{movies[sliderIndex]?.title}</h3>
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
                {movies.map((movie: MovieProps) => (
                  <div
                    className='col-md-4 col-sm-6 col-xs-6 col-xl-3 my-2'
                    key={movie?.id}
                  >
                    <Link
                      to={`/${movie?.id}`}
                      style={{ color: '#fff', textDecoration: 'none' }}
                    >
                      <div className='poster-card'>
                        <div className='poster-img'>
                          {/* <Image
                            alt={movie.title}
                            src={`${fetchMovieImg(movie.poster_path)}`}
                          /> */}
                          <LazyLoad>
                            <img
                              alt={movie.title}
                              src={`${fetchMovieImg(movie.poster_path)}`}
                            />
                          </LazyLoad>
                        </div>
                        <div className='py-2'>
                          <h6>{movie.original_title}</h6>
                          <p className='small'>
                            {new Date(movie.release_date).getFullYear()}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
        <div className='col-md-4 sidebar-wrapper' style={{ height: '100%' }}>
          <div style={{ height: '100%' }}>
            <LandingSidebar />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .sidebar-wrapper {
    position: sticky !important;
    top: 18px;
    right: 0;
    @media (max-width: 768px) {
      display: none;
    }
  }
  .poster-card {
    cursor: pointer;
    .poster-img {
      height: 260px;
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
