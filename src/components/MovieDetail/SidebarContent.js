import React from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import { fetchMovieImg } from '../../utils/axios';
import { fCurrency } from '../../utils/formatNumber';
import CircularCharts from '../CircularChart';

export default function SidebarContent({ movie }) {
  const companies = [
    {
      icon: 'entypo-social:youtube-with-circle',
      title: 'Youtube',
      bgColor: '#fe0000',
    },
    {
      icon: 'ic:baseline-apple',
      title: 'Apple',
      bgColor: '#fff',
    },
    {
      icon: 'logos:spotify-icon',
      title: 'Spotify',
      bgColor: '#1fd762',
    },
    {
      icon: 'logos:netflix-icon',
      title: 'Netflix',
      bgColor: '#000',
    },

    {
      icon: 'entypo-social:youtube-with-circle',
      title: 'Youtube',
      bgColor: '#fe0000',
    },
  ];

  return (
    <Wrapper>
      <div className='pt-3'>
        <p>We work together</p>
        <div className='d-flex companies'>
          {companies.map((item) => (
            <div
              className='company-item'
              key={item.title}
              style={{ backgroundColor: item.bgColor }}
            >
              <Icon icon={item.icon} color='#fff' />
            </div>
          ))}
        </div>
      </div>
      {/* Votes statistics */}
      <div
        className='vote-card-wrapper my-3'
        style={{
          backgroundImage: `url(${fetchMovieImg(movie?.backdrop_path)})`,
        }}
      >
        <div className='vote-card p-3'>
          <div className='mx-auto'>
            <h5>Do you like the series</h5>
            <p className='small'>Overall vote statistics</p>
            <CircularCharts number={movie.vote_average} />
          </div>
        </div>
      </div>
      {/* Genres */}
      <div className='compilation my-3'>
        <p>Compilation of genres</p>
        <div className='compilation-wrapper'>
          {movie?.genres?.slice(0, 3).map((genre) => (
            <div
              key={genre.name}
              style={{
                backgroundColor:
                  (genre.name === 'Horror' && '#fe0000') ||
                  (genre.name === 'Adventure' && '#7657ac') ||
                  (genre.name === 'Comedy' && 'yellow') ||
                  (genre.name === 'Action' && '#ee462e') ||
                  '#db01db',
              }}
              className='compilation-item small'
            >
              {genre.name}
            </div>
          ))}
        </div>
      </div>
      <div className='row p-3'>
        <div className='col-6'>
          <p>
            <strong>Status</strong>
          </p>
          <p>{movie.status}</p>
        </div>
        <div className='col-6'>
          <p>
            <strong>Original language</strong>
          </p>
          <p>{movie.original_language}</p>
        </div>
        <div className='col-6'>
          <p>
            <strong>Budget</strong>
          </p>
          <p>{fCurrency(movie.budget)}</p>
        </div>
        <div className='col-6'>
          <p>
            <strong>Revenue</strong>
          </p>
          <p>{fCurrency(movie.revenue)}</p>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .vote-card-wrapper {
    height: 200px;
    width: 100%;
    background-size: cover;
    border-radius: 20px;
    overflow: hidden;
    .vote-card {
      background: rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(9px);
      height: 100%;
    }
  }
  .companies {
    justify-content: space-between;
    .company-item {
      height: 50px;
      width: 50px;
      align-items: center;
      justify-content: space-around;
      display: flex;
      border-radius: 50%;
      font-size: 28px;
    }
  }
  .compilation {
    .compilation-wrapper {
      background-color: #232323;
      display: flex;
      border-radius: 50px;
      padding: 5px;
      justify-content: space-between;

      .compilation-item {
        height: 90px;
        width: 90px;
        border-radius: 50%;
        display: block;
        line-height: 90px;
        vertical-align: middle;
        text-align: center;
      }
    }
  }
`;
