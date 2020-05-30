import React from "react";
import styled from "styled-components";
import NavLogo from "../../assets/logo.svg";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <Container>
      <Grids>
        <NavLink to="/">
          <div className="nav-logo">
            <img src={NavLogo} alt="Stedfasts" />
          </div>
        </NavLink>
        <div></div>
        <div></div>
        <NavLink to="/services">SERVICES</NavLink>
        <NavLink to="/advantage">OUR ADVANTAGE</NavLink>
        <NavLink to="/blog">ABOUT</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </Grids>
    </Container>
  );
};

const Container = styled.div`
  height: 10vh;
  width: 100%;
  position: absolute;
  margin: 0 auto;
  z-index: 50;
  font-size: 1.6rem;

  a {
    font-family: Righteous;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
    text-transform: uppercase;
    color: #e5daff;
  }

  .nav-logo {
    padding-top: 10px;
    /* width: 280px;
    height: 280px; */
  }
`;

const Grids = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  align-items: center;
  width: 80%;
  height: 100%;
  margin: 0 auto;
  align-items: center;
  justify-items: center;
`;
