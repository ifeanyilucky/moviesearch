import React from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import { fetchMovieImg } from "../../utils/axios";
import { fCurrency } from "../../utils/formatNumber";
import CircularCharts from "../CircularChart";
import { MovieProps } from "../../types";

export default function SidebarContent({ movie }: { movie: MovieProps }) {
  const companies = [
    {
      icon: "logos:facebook-icon",
      title: "Facebook",
      bgColor: "#1fd762",
    },
    {
      icon: "logos:instagram-icon",
      title: "Instagram",
      bgColor: "#1fd762",
    },
    {
      icon: "logos:twitter-icon",
      title: "Twitter",
      bgColor: "#fe0000",
    },
  ];
  const genreColors: string[] = [
    "#fe0000",
    "#441c87",
    "#00684e",
    "#ee462e",
    "#c70663",
    "#c78d06",
    "#d50000",
    "#db01db",
  ];
  const color: number = Math.floor(Math.random() * genreColors.length);
  return (
    <Wrapper>
      <div className="py-3">
        <div className="d-flex companies">
          {companies.map((item) => (
            <div
              className="company-item"
              key={item.title}
              style={{ border: `2px solid ${item.bgColor}` }}
            >
              <Icon icon={item.icon} color={item.bgColor} />
            </div>
          ))}
        </div>
      </div>
      {/* Votes statistics */}
      <div
        className="vote-card-wrapper my-3"
        style={{
          backgroundImage: `url(${fetchMovieImg(movie?.backdrop_path)})`,
        }}
      >
        <div className="vote-card p-3">
          <div className="mx-auto">
            <h5>Do you like the series</h5>
            <p className="small">Overall vote statistics</p>
            <CircularCharts number={movie.vote_average} />
          </div>
        </div>
      </div>
      {/* Genres */}
      <div className="compilation my-3">
        <p>Compilation of genres</p>
        <div className="compilation-wrapper">
          {movie?.genres?.slice(0, 3).map((genre: { name: string }) => (
            <div
              key={genre.name}
              style={{
                backgroundColor:
                  (genre.name === "Horror" && genreColors[color]) ||
                  (genre.name === "Adventure" && genreColors[color]) ||
                  (genre.name === "Comedy" && genreColors[color]) ||
                  (genre.name === "Action" && genreColors[color]) ||
                  (genre.name === "Mystery" && genreColors[color]) ||
                  (genre.name === "Animation" && genreColors[color]) ||
                  (genre.name === "Family" && genreColors[color]) ||
                  (genre.name === "Fantacy" && genreColors[color]) ||
                  (genre.name === "Music" && genreColors[color]) ||
                  (genre.name === "Romance" && genreColors[color]) ||
                  genreColors[color],
              }}
              className="compilation-item small"
            >
              {genre.name}
            </div>
          ))}
        </div>
      </div>
      <div className="row p-3">
        <div className="col-6">
          <p>
            <strong>Status</strong>
          </p>
          <p>{movie.status}</p>
        </div>
        <div className="col-6">
          <p>
            <strong>Original language</strong>
          </p>
          <p>{movie.original_language}</p>
        </div>
        <div className="col-6">
          <p>
            <strong>Budget</strong>
          </p>
          <p>{fCurrency(movie.budget)}</p>
        </div>
        <div className="col-6">
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
    height: 100%;
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
    justify-content: space-around;
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
        text-align: center;
      }
    }
  }
`;
