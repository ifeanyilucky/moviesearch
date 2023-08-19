import React from "react";
import styled from "styled-components";
import FooterSearch from "./FooterSearch";

export default function Footer() {
  return (
    <Wrapper>
      <FooterSearch />
      <div className="container">
        <div className="text-center">
          <p>&copy; {new Date().getFullYear()}. MovieDB.</p>
          <p>
            Built with <span style={{ color: "red" }}>❤</span> by{" "}
            <a
              href="https://ifeanyilucky.vercel.app"
              target="_blank"
              rel="noreferrer"
            >
              Codack
            </a>
          </p>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
