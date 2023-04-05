// import LandingHero from "../"
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import { useParams } from 'react-router-dom';
import { fetchSingleMovie, fetchMovieImg, getCredits } from '../utils/axios';
import config from '../config';
import HeroDetail from '../components/MovieDetail/HeroDetail';
import SidebarContent from '../components/MovieDetail/SidebarContent';
import Navbar from '../layout/Navbar';

export default function MovieDetail() {
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [cast, setCast] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getMovie = async () => {
      setIsLoading(true);
      try {
        const { data } = await fetchSingleMovie(id);
        const castResponse = await getCredits(id);
        console.log(data);
        setMovie(data);
        setCast(castResponse.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    getMovie();
  }, [id]);

  return (
    <Wrapper>
      {isLoading && !movie ? (
        <h2>Loading</h2>
      ) : (
        <>
          <Navbar />
          <section className='container mt-5 text-white'>
            <div className='row'>
              <div className='col-md-8 col-sm-12 col-xs-12'>
                <HeroDetail movie={movie} />
                {/* <HeroDetail />
              <HeroDetail /> */}
                <div className='my-5'>
                  <h3>Overview</h3>
                  <p>{movie.overview}</p>
                </div>
                <div className='my-3'>
                  <h3 className='mb-3'>Top cast</h3>
                  <div className='cast-wrapper row'>
                    {cast?.cast?.slice(0, 4).map((item) => (
                      <div key={item.id} className='cast col-6'>
                        <div className='cast-img'>
                          <img
                            src={fetchMovieImg(item?.profile_path)}
                            alt={item.id}
                          />
                        </div>
                        <p className='small text-center my-3'>
                          <strong>{item?.original_name}</strong>
                          <br />
                          <span>{item?.character}</span>
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className='col-md-4 col-sm-12 col-xs-12 position-relative'>
                <div className='position-sticky top-0'>
                  <SidebarContent movie={movie} />
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #000;
  .cast-wrapper {
    .cast {
      align-items: center;
      display: flex;
      flex-flow: column;
      .cast-img {
        height: 220px;
        width: 220px;
        overflow: hidden;
        border-radius: 100%;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }

  .row,
  .col-6 {
    height: 100%;
  }
`;
