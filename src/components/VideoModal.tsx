import React, { Component } from "react";
import { IVideo } from "../types";
import styled from "styled-components";
import { getMovieVideo } from "../utils/axios";
import { Close } from "../Icons";

export class VideoModal extends Component<
  {
    movieId: string;
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
  },
  { isLoading: boolean; video: IVideo }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      isLoading: false,
      video: null as unknown as IVideo,
    };
  }

  async componentDidMount(): Promise<void> {
    this.setState({ isLoading: true });
    await getMovieVideo(this.props.movieId).then(({ data }) => {
      const teaser = data.results.filter(
        (m: IVideo) => m.type === "Teaser" && m.official === true
      );

      this.setState({ isLoading: false, video: teaser[0] });
    });
  }
  render() {
    return (
      <>
        {this.state.isLoading ? (
          "IsLoading"
        ) : (
          <Wrapper>
            <div className="video-card">
              <div className="video-header">
                <h4>Official Movie Trailer</h4>
                <button
                  className="close-btn"
                  onClick={() => this.props.setShow(false)}
                >
                  <Close />
                </button>
              </div>
              <div>
                <iframe
                  className="video-frame"
                  src={`https://www.youtube.com/embed/${this.state.video?.key}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </Wrapper>
        )}
      </>
    );
  }
}

export default VideoModal;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  z-index: 99;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: space-around;
  overflow-y: hidden;
  .video-card {
    width: 768px;
    .video-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: #000;
      padding: 12px;
      .close-btn {
        outline: none;
        background-color: transparent;
        border: none;
      }
    }
    .video-frame {
      height: 400px;
      width: 100%;
    }
  }
`;
