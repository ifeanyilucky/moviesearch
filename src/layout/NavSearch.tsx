import React from "react";
import styled from "styled-components";
import { MovieProps } from "../types";

type IState<T> = {
  searchValue: T;
  movies: MovieProps[];
  showSearch: boolean;
};
class NavSearch extends React.Component<{}, IState<string>> {
  state: IState<string> = {
    searchValue: "",
    movies: [],
    showSearch: false,
  };

  render(): React.ReactNode {
    return (
      <Wrapper>
        {this.state.showSearch && (
          <div
            className="overlay"
            onClick={() => this.setState({ showSearch: false })}
          />
        )}
        <div style={{ position: "relative" }}>
          <input
            className="search-movie"
            placeholder="Search for movie"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              this.setState({ searchValue: e.target.value });
            }}
            onFocus={() => this.setState({ showSearch: true })}
          />
          {this.state.showSearch && (
            <div className="movie-cards">
              {(this.state.searchValue.length < 1 ? (
                <div className="empty-movies">
                  <div style={{ fontSize: "40px" }}>😀</div>
                  <h4>Hola! Hit the keyboard</h4>
                </div>
              ) : (
                ""
              )) ||
              (this.state.searchValue.length >= 1 &&
                this.state.movies.length < 1) ? (
                <div className="empty-movies">
                  <div style={{ fontSize: "40px" }}>😞</div>
                  <h4>Can't find the movie you are looking for</h4>
                </div>
              ) : (
                this.state.movies.map((item) => <MoviePoster />)
              )}
            </div>
          )}
        </div>
      </Wrapper>
    );
  }
}

export function MoviePoster() {
  return (
    <Poster>
      <div className="poster-img"></div>
      <div className="movie-info">
        <h3>Spider man</h3>
      </div>
    </Poster>
  );
}
const Wrapper = styled.div`
  .search-movie {
    background-color: #000;
    border: 1px solid rgba(114, 114, 114, 0.4);
    width: 100%;
    padding: 12px 12px;
    border-radius: 25px;
    z-index: 99;
    position: relative;
    color: #ffffff;
    ::placeholder {
      color: gray;
    }
  }
  .movie-cards {
    background-color: #000;
    padding: 1rem;
    height: 540px;
    width: 100%;
    position: absolute;
    z-index: 9 !important;
    margin-top: 10px;
    border-radius: 20px;
    overflow-y: auto;
  }
  .overlay {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background-color: rgba(255, 255, 255, 0.5);
    backdrop-filter: filter(2px);
  }
  .empty-movies {
    text-align: center;
    padding: 0 4rem;
    @media (max-width: 400px) {
      padding: 0 0.6rem;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    h4 {
      color: #aaa9a9;
    }
  }
`;

const Poster = styled.div`
  display: flex;
  flex-flow: row;
  align-items: "center";
  gap: 20px;
  margin-bottom: 20px;
  .poster-img {
    height: 170px;
    width: 130px;
    background-color: #000;
    border-radius: 15px;
  }
  .movie-info {
  }
`;
export default NavSearch;
