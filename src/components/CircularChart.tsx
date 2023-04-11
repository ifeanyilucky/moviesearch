import React from 'react';
import styled from 'styled-components';

export default function CircularCharts({ number }: { number: number }) {
  return (
    <Wrapper>
      <div className='flex-wrapper'>
        <div className='single-chart'>
          <svg viewBox='0 0 36 36' className='circular-chart green'>
            <path
              className='circle-bg'
              d='M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831'
            />
            <path
              className='circle'
              stroke-dasharray={`${number}, 100`}
              d='M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831'
            />
            <text x='18' y='20.35' className='percentage'>
              {number}%
            </text>
          </svg>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .flex-wrapper {
    display: flex;
    flex-flow: row nowrap;
  }

  .single-chart {
    width: 33%;
    justify-content: space-around;
  }

  .circular-chart {
    display: block;
    margin: 10px auto;
    max-width: 80%;
    max-height: 250px;
  }

  .circle-bg {
    fill: none;
    stroke: #eee;
    stroke-width: 3.8;
  }

  .circle {
    fill: none;
    stroke-width: 2.8;
    stroke-linecap: round;
    animation: progress 1s ease-out forwards;
  }

  @keyframes progress {
    0% {
      stroke-dasharray: 0 100;
    }
  }

  .circular-chart.green .circle {
    stroke: #4cc790;
  }

  .percentage {
    fill: #fff;

    font-size: 0.5em;
    text-anchor: middle;
  }
`;
