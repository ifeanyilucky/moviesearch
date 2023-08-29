import React, { Component } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { fetchMovieImg, getPeople } from "../../utils/axios";
import { CastProps } from "../../types";
import { Link } from "react-router-dom";

export default class Casts extends Component {
  casts = new Array(10).fill(10);
  state = {
    casts: [],
    isLoading: false,
  };

  async componentDidMount(): Promise<void> {
    this.setState({ isLoading: true });
    try {
      const { data } = await getPeople();
      if (data.results) {
        this.setState({ isLoading: false, casts: data.results });
      }
    } catch (error) {
      console.log(error);
      this.setState({ isLoading: false });
    }
  }
  render() {
    return (
      <Wrapper>
        <div className="container">
          <h3 className="pb-3">Top Casts</h3>
        </div>
        <Swiper
          modules={[Navigation]}
          slidesPerView={7}
          spaceBetween={30}
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
          {this.state.casts.slice(0, 15).map((cast: CastProps) => (
            <SwiperSlide>
              <Link to={`/people/${cast.id}`}>
                <div className="people">
                  <div
                    className="cast-img"
                    style={{
                      backgroundImage: `url(${fetchMovieImg(
                        cast.profile_path
                      )})`,
                    }}
                  ></div>
                  <div className="pt-3 text-center">
                    <p>{cast.name}</p>
                  </div>
                </div>
              </Link>
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
      border-radius: 50%;
      background-size: cover;
      background-position: center;
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
