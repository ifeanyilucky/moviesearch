import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Outlet, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";
import LandingSidebar from "../components/LandingPage/LandingSidebar";
import { Close, SearchIcon } from "../Icons";
import SideBarModal from "../components/SidebarModal";
import NavSearch from "./NavSearch";

export default function Navbar() {
  // const categories: Array<string> = ['Sports', 'Action', 'Drama', 'Romance'];
  const [isOpen, setOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname) setOpen(false);
  }, [pathname]);
  return (
    <>
      <Wrapper isOpen={isOpen}>
        <div className="container">
          <div className="navigation-bar justify-content-between align-items-baseline">
            <div className="left-nav">
              <div className="logo">
                <h4>MovieDB</h4>
              </div>
            </div>
            <div className="right-nav">
              <NavSearch />
            </div>
          </div>
          {/* <div className="nav-search">
            <SideBarModal
              show={showSearch}
              closeShow={() => setShowSearch(false)}
              size="lg"
              overlayColor={""}
              css={undefined}
            />
          </div> */}
        </div>
      </Wrapper>
      <Outlet />
    </>
  );
}

const Wrapper = styled.div`
  padding-top: 1.5rem;
  z-index: 99 !important;
  background-color: transparent;

  left: 5rem;
  top: 1rem;
  width: 100%;
  .nav-search {
    @media (min-width: 768px) {
      display: none;
    }
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    animation-duration: 0.3s;
    animation-fill-mode: both;
    -webkit-animation-duration: 0.3s;
    animation-name: ${({ isOpen }: { isOpen: boolean }) =>
      isOpen ? "fadeInDown" : "fadeInUp"};
    display: ${({ isOpen }: { isOpen: boolean }) =>
      isOpen ? "block" : "none"};
  }
  .navigation-bar {
    display: flex;
    flex-flow: row;
    width: 100%;
    .left-nav {
      flex: 30%;
    }
    .right-nav {
      flex: 40%;
    }
  }

  .logo {
    max-width: 100%;
    z-index: 999 !important;
  }

  @keyframes fadeInUp {
    from {
      margin-top: 4rem;
      opacity: 0;
    }
    to {
      margin-top: 0;
      opacity: 1;
    }
  }
  @keyframes fadeInDown {
    from {
      margin-bottom: 6rem;
      opacity: 0;
    }
    to {
      margin-bottom: 0;
      opacity: 1;
    }
  }

  @-webkit-keyframes fadeInUp {
    from {
      margin-top: 4rem;
      opacity: 0;
    }
    to {
      margin-top: 0;
      opacity: 1;
    }
  }
`;
