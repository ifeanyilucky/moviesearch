import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { Icon } from '@iconify/react';

export default function Navbar() {
  const categories = [
    'Movies and series',
    'Sports',
    'Adults',
    'Action',
    'Drama',
    'Romance',
  ];
  return (
    <>
      <Wrapper>
        <div className='container'>
          <div className='row justify-content-between align-items-center'>
            <div className='col-md-2 col-3'>
              <div className='logo'>
                <h3>MovieDB</h3>
              </div>
            </div>
            <div className='col-md-10 col-9'>
              <div className='row'>
                <div className='col-md-8 nav_items'>
                  <ul>
                    {categories.map((item) => (
                      <li key={item} className='small'>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className='col-md-4 col-12'>
                  <div className='search-wrapper'>
                    <span className='search-icon'>
                      <Icon icon='material-symbols:search-rounded' />
                    </span>
                    <input
                      type='text'
                      className='search'
                      placeholder='search'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
      <Outlet />
    </>
  );
}

const Wrapper = styled.div`
  padding-top: 1.5rem;
  z-index: 99999 !important;
  position: relative;

  @media (max-width: 768px) {
    /* background-color: rgba(255, 255, 255, 0.9); */
    height: 100vh;
    width: 100%;

    backdrop-filter: blur(5px);
    .search-wrapper {
      display: none !important;
    }
  }
  .logo {
    max-width: 100%;
    z-index: 999 !important;
  }
  .nav_items {
    ul {
      display: flex;
      flex-flow: row;
      list-style: none;
      background-color: #232323;
      border-radius: 30px;
      height: 50px;
      align-items: center;
      justify-content: space-between;
      padding: 0;
      margin: 0;
      @media (max-width: 768px) {
        flex-flow: column;
        width: 100%;
        position: fixed;
        top: 0;
        right: 0;
        margin-top: 5rem;
        background-color: transparent;
        height: auto;

        li {
          font-size: 27px;
          margin: 10px auto;
        }
      }
      li {
        padding: 10px 18px;
        cursor: pointer;
        :hover {
          background-color: #fff;
          color: #000;
          border-radius: 30px;
        }
        transition: all 0.5s ease-in-out;
      }
    }
  }
  .search-wrapper {
    border-radius: 30px;
    display: flex;
    padding: 5px;
    outline: none;
    border: 0;
    width: 100%;
    background-color: #232323;
    .search {
      width: 100%;
      background: transparent;
      outline: none;
      border: 0;
    }
    .search-icon {
      background-color: #000;
      height: 28px;
      width: 28px;
      border-radius: 50%;
    }
  }
`;
