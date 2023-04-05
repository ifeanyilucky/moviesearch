import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';
import { fetchMovieImg, searchMovies } from '../../utils/axios';

export default function LandingSidebar({ movies }) {
  const [value, setValue] = useState('');
  const [searchedMovies, setSearchedMovies] = useState([]);
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
        try {
          const { data } = await searchMovies(value);
          setSearchedMovies(data.results);
        } catch (error) {
          console.log(error);
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
        {suggestions.map((item, i) => (
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
        {movies &&
          searchedMovies?.map((movie) => (
            <RouterLink to={`/${movie?.id}`} key={movie?.id}>
              <div
                className='movie-card mt-3'
                style={{
                  background: `url(${fetchMovieImg(movie?.backdrop_path)})`,
                }}
              >
                <div className='movie-info'>
                  <h5>{movie.original_title}</h5>
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
  height: 100vh;
  border-radius: 26px;
  padding: 15px 27px;
  width: 100%;
  overflow: auto;
  .suggested-movies {
    .movie-card {
      height: 230px;
      width: 100%;
      background-size: cover !important;
      background-position: top center !important;
      padding: 15px;
      border-radius: 20px;
      display: flex;
      flex-flow: column;
      justify-content: flex-end;
      .movie-info {
        height: 60px;
        width: 100%;
        background-color: rgba(255, 255, 255, 0.4);
        backdrop-filter: blur(5px);
        border-radius: 14px;
        padding: 12px;
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
