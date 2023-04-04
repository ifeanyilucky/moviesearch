import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { fetchMovieImg } from '../../utils/axios';
import Modal from 'react-modal';

HeroDetail.propTypes = {
  movie: PropTypes.object,
};
export default function HeroDetail({ movie }) {
  const navigate = useNavigate();
  const [favorite, setFavorite] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);

  const handleFavoriteClick = () => {
    if (favorite === true) {
      setFavorite(false);
    } else setFavorite(true);
  };
  return (
    <Wrapper>
      <Modal
        isOpen={videoOpen}
        onRequestClose={() => setVideoOpen(false)}
        contentLabel='Movie modal'
        style={{
          overlay: { backgroundColor: 'rgba(0,0,0,0.9)' },
          content: { backgroundColor: '#000' },
        }}
      >
        <h4>Official trailer</h4>
        <iframe
          width='100%'
          height='100%'
          src='https://www.youtube-nocookie.com/embed/KH-pw1cv34E'
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowfullscreen
        ></iframe>
      </Modal>
      <div
        className='movie-card'
        style={{
          background: `linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent), url(${fetchMovieImg(
            movie?.backdrop_path
          )})`,
        }}
      >
        <div className='row justify-content-between align-items-center'>
          <div className='col-6'>
            <div className='left-row'>
              <div className='top'>
                <div className='d-flex align-items-center'>
                  <button className=' blurry-btn' onClick={() => navigate(-1)}>
                    <Icon icon={'ic:baseline-keyboard-arrow-left'} />
                  </button>
                  <span className='small'>Back</span>
                </div>
              </div>
              <div className='bottom'>
                <h2 style={{ fontWeight: 700 }}>
                  {movie?.original_title}{' '}
                  <span className='text-muted'>
                    {new Date(movie?.release_date).getFullYear()}
                  </span>
                </h2>
                <p>
                  <i>{movie?.tagline}</i>
                </p>
                <h6>
                  {movie.release_date} (
                  {movie?.production_countries?.map((item) => item.iso_3166_1)})
                  • {Math.floor(movie?.runtime / 60)}h {movie?.runtime % 60}m
                </h6>
              </div>
            </div>
          </div>
          <div className='col-6 position-relative'>
            <div className='right-row'>
              <div className='top'>
                <button className='blurry-btn' onClick={handleFavoriteClick}>
                  <Icon
                    icon='mdi:cards-heart'
                    color={favorite ? '#fe0000' : '#000'}
                  />
                </button>
                <button className='blurry-btn'>
                  <Icon icon='material-symbols:share-outline' />
                </button>
                <button className='blurry-btn'>
                  <span>
                    <Icon icon='bi:three-dots-vertical' />
                  </span>
                </button>
              </div>
              <div className='bottom'>
                <button className='play-btn' onClick={() => setVideoOpen(true)}>
                  <Icon icon='material-symbols:play-arrow' />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  margin: 20px 0;
  .movie-card {
    height: 500px;
    border-radius: 30px;
    background-size: cover !important;
    padding: 2rem;
    .left-row,
    .right-row {
      display: flex;
      flex-flow: column;
      justify-content: space-between;
      height: 100%;
    }
    .right-row {
      position: absolute;
      right: 0;
      .bottom {
        position: absolute;
        bottom: 0;
        right: 0;
      }
    }
  }
  .play-btn {
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 50%;
    outline: none;
    border: 0;
    height: 60px;
    width: 60px;
    backdrop-filter: blur(5px);
  }
  .blurry-btn {
    background: rgba(255, 255, 255, 0.4);
    outline: none;
    border: 0;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    margin: 5px;
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
  }
`;
