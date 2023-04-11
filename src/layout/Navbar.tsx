import React, { useState } from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { Icon } from '@iconify/react';
import LandingSidebar from '../components/LandingPage/LandingSidebar';
import { Close, SearchIcon } from '../Icons';

export default function Navbar() {
  // const categories: Array<string> = ['Sports', 'Action', 'Drama', 'Romance'];
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <Wrapper isOpen={isOpen}>
        <div className='container'>
          <div className='navigation-bar justify-content-between align-items-center'>
            <div className='left-nav'>
              <div className='logo'>
                <h4>MovieDB</h4>
              </div>
            </div>
            <div className='right-nav'>
              <div
                className='nav-toggle'
                onClick={() => (isOpen ? setOpen(false) : setOpen(true))}
              >
                {isOpen ? <Close /> : <SearchIcon />}
              </div>
            </div>
          </div>
          <div className='nav-search'>
            <LandingSidebar />
          </div>{' '}
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
  .nav-search {
    @media (min-width: 768px) {
      display: none;
    }
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    display: ${({ isOpen }: { isOpen: boolean }) =>
      isOpen ? 'block' : 'none'};
  }
  .navigation-bar {
    display: flex;
    flex-flow: row;
  }

  .logo {
    max-width: 100%;
    z-index: 999 !important;
  }

  .nav-toggle {
    width: 32px;
    will-change: transform;
    position: relative;
    height: 32px;
    cursor: pointer;
    display: block;
    z-index: 99999;
    @media (min-width: 768px) {
      display: none;
    }
  }
`;
