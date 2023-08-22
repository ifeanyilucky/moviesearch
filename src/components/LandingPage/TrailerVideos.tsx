import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Zoom } from "swiper/modules";
import { PlayIcon } from "../../Icons";

export default class TrailerVideos extends React.Component {
  movies = new Array(10).fill(10);

  render() {
    return (
      <Wrapper>
        <div className="container">
          <div className="pb-5 mb-md-4">
            <h1 className="display-1">
              <span style={{ color: "red" }}> Watch</span>
              <br />
              <span>Latest trailer's video.</span>
            </h1>
            <p className="lead">Explore free trailers and search for movies.</p>
          </div>
        </div>
        <Swiper
          slidesPerView={3}
          modules={[A11y, Zoom]}
          spaceBetween={15}
          centerInsufficientSlides
          centeredSlidesBounds
          centeredSlides
          style={{ alignItems: "center" }}
          zoom
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
        >
          {this.movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              {({ isActive }) => {
                console.log(isActive);
                return (
                  <div
                    className={
                      isActive ? "active-trailer trailer-card" : "trailer-card"
                    }
                  >
                    <div className="head">
                      <PlayIcon />
                    </div>
                    <div className="content px-2 py-2">
                      <small className="text-muted">MOVIE {movie}</small>

                      <figure className="lead">Movie Name</figure>
                    </div>
                  </div>
                );
              }}
            </SwiperSlide>
          ))}
        </Swiper>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  background: #fff;
  color: #000;
  width: 100%;
  overflow-x: hidden !important;
  padding: 5rem 0;
  .extra-large {
    font-size: 96px;
  }
  .slide {
    display: flex;
    overflow-x: scroll;
  }
  .trailer-card {
    /* margin: 0 10px; */
    @media (max-width: 768px) {
      min-width: 140px;
      .head {
        height: 150px !important;
      }
    }
    min-width: 320px;
    cursor: pointer;
    .head {
      border-radius: 14px;
      height: 220px;
      background-color: red;
      width: 100%;
      border: 2px solid transparent;
      transition: 0.29s border ease-in-out;
      :hover {
        border: 2px solid #000;
      }
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
    }
  }
  .swiper-wrapper {
    align-items: center;
  }
  .active-trailer {
    min-width: 390px;
    .head {
      background-color: black !important;
      height: 260px;
    }
  }
`;
