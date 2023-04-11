import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { truncate } from 'lodash';
import { Link as RouterLink } from 'react-router-dom';
import { fetchMovieImg, searchMovies } from '../../utils/axios';
import { MovieProps } from '../../types';

export default function LandingSidebar() {
  const [value, setValue] = useState<string>('');
  const [searchedMovies, setSearchedMovies] = useState<[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  const suggestions = [
    'Crime',
    'documentary',
    'drama',
    'sci-fi',
    'adventure',
    'historical',
  ];
  useEffect(() => {
    const startSearch = async () => {
      if (value) {
        setLoading(true);
        try {
          const { data } = await searchMovies(value);
          setSearchedMovies(data.results);
          setLoading(false);
        } catch (error) {
          console.log(error);
          setLoading(false);
        }
      } else {
        setSearchedMovies([]);
      }
    };
    startSearch();
  }, [value]);
  return (
    <Wrapper>
      <input
        type='text'
        className='search_input mt-3'
        placeholder='Search movie, series'
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <div className='suggestion my-5'>
        {suggestions.map((item: string, i: number) => (
          <Chip
            key={i}
            style={{ margin: '3px 5px' }}
            onClick={() => {
              setValue(item);
            }}
          >
            {item}
          </Chip>
        ))}
      </div>
      <div className='suggested-movies my-5'>
        {value && <h4>You searched for "{value}"</h4>}
        {searchedMovies &&
          searchedMovies?.map((movie: MovieProps) => (
            <RouterLink
              to={`/${movie?.id}`}
              key={movie?.id}
              style={{ textDecoration: 'none', color: '#fff' }}
            >
              <div
                className='movie-card mt-3'
                style={{
                  background: `url(${fetchMovieImg(movie?.backdrop_path)})`,
                }}
              >
                <div className='movie-info'>
                  <h6>{truncate(movie.original_title, { length: 38 })}</h6>
                  <p className='small'>{movie.release_date}</p>
                </div>
              </div>
            </RouterLink>
          ))}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: #232323;
  height: 95vh;
  border-radius: 26px;
  padding: 15px 27px;
  width: 100%;
  overflow: auto;
  @media (max-width: 768px) {
    height: 100%;
    padding: 0;
    border-radius: 0;
    padding: 15px;
  }
  .suggested-movies {
    .movie-card {
      height: 230px;
      width: 100%;
      background-size: cover !important;
      background-position: top center !important;
      padding: 0 !important;
      border-radius: 20px;
      display: flex;
      flex-flow: column;
      justify-content: flex-end;
      .movie-info {
        height: 90px;
        width: 100%;
        background-color: rgba(255, 255, 255, 0.4);
        backdrop-filter: blur(5px);
        border-bottom-right-radius: 20px;
        border-bottom-left-radius: 20px;
        padding: 12px;
        text-decoration: none !important;
        display: flex;
        flex-flow: column;
        justify-content: flex-end;
      }
    }
  }
  .search_input {
    background: transparent;
    border: none;
    outline: none;
    width: 100%;
    font-size: 26px;
    color: #fff;
    @media (max-width: 768px) {
      margin-top: 3rem !important;
    }
  }
  .suggestion {
  }
`;

const Chip = styled.button`
  border-radius: 30px;
  border: none;
  padding: 5px 13px;
  outline: none;
  background-color: rgba(255, 255, 255, 0.2);
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  transition: 0.3s all ease-in-out;
  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
`;
