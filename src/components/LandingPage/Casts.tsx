import React, { Component } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

export default class Casts extends Component {
  casts = new Array(10).fill(10);
  render() {
    return (
      <Wrapper>
        <div className="container">
          <h3 className="pb-3">Top Casts</h3>
        </div>
        <Swiper
          modules={[Navigation]}
          slidesPerView={7}
          navigation
          breakpoints={{
            320: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 8,
              spaceBetween: 40,
            },
          }}
        >
          {this.casts.map(() => (
            <SwiperSlide>
              <div className="people">
                <div className="cast-img"></div>
                <div className="pt-3 text-center">
                  <p>Cast Fullname</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  margin: 3rem 0;
  .casts {
    display: flex;
    flex-flow: row;
    align-items: center;
    gap: 10px;
  }
  .people {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .cast-img {
      height: 160px;
      width: 160px;
      background-color: red;
      border-radius: 50%;
      border: 2px solid transparent;
      transition: 0.5s border cubic-bezier(0.35, 0.82, 0.165, 1);
      :hover {
        border: 2px solid #fff;
      }
    }
  }
  .swiper-wrapper {
    align-items: center;
  }
  .swiper {
    :hover {
      .swiper-button-prev {
        display: block;
        background-color: #000;
        width: 70px;
        height: 70px;
        border-radius: 50%;
        color: #fff !important;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
      }
      .swiper-button-next {
        justify-content: center;
        display: block;
        background-color: #000;
        width: 70px;
        height: 70px;
        border-radius: 50%;
        color: #fff !important;
        display: flex;
        align-items: center;
      }
    }
    .swiper-button-prev {
      display: none;
    }
    .swiper-button-next {
      display: none;
    }
  }
`;
