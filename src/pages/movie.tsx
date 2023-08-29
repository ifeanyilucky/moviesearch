import { useParams } from "react-router";
import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Movie() {
  const { id } = useParams();
  return (
    <MovieWrapper>
      <div className="movie-hero">
        <div className="row h-100">
          <div className="col-md-6 position-relative">
            <div
              className="container position-absolute"
              style={{ bottom: "5%", left: "5%" }}
            >
              <div className="h-100 ">
                <div>
                  <h2 className="display-3">Dune</h2>
                  <p>
                    Lorem ipsum dolor sit a met, is not your mate, you should
                    try and do better my boy. Longer descriptin will be added
                    tho
                  </p>
                </div>
                <div className="mt-5">
                  <button className="button">Watch Trailer</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 position-relative">
            <div
              className="container position-absolute"
              style={{ bottom: "5%", left: "5%" }}
            >
              {/* Poster image section */}
              <div>
                <p className="lead">Posters</p>
                <Swiper slidesPerView={4} spaceBetween={20}>
                  {new Array(10).fill(10).map((item) => (
                    <SwiperSlide>
                      <div className="poster-image"></div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Top cast section */}
              <div className="mt-5">
                <p className="lead">Actors</p>
                <div className="cast-wrapper">
                  {new Array(5).fill(5).map((item) => (
                    <div className="cast">
                      <div className="cast-image"></div>
                      <p className="text-muted">Temilade Olafemi</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MovieWrapper>
  );
}

const MovieWrapper = styled.div`
  width: 100% !important;
  overflow: hidden;
  .movie-hero {
    /* background: linear-gradient(to top, rgba(0, 0, 0, 1)) rgba(0, 0, 0, 0.2),
      red; */

    background-color: red;
    height: 100vh;
    width: 100%;
  }
  .poster-image {
    height: 94px;
    width: 160px;
    background-color: black;
    border-radius: 10px;
    /* margin-right: 10px !important; */
  }
  .swiper-wrapper {
    /* gap: 20px; */
  }
  .cast-wrapper {
    display: flex;
    flex-flow: row;
    align-items: center;
    /* justify-content: center; */
    text-align: center;
    .cast {
      width: 90px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10px;
      .cast-image {
        height: 50px;
        width: 50px;
        background-color: black;
        border-radius: 50%;
      }
    }
  }
`;
