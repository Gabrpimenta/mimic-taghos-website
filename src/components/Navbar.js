import React from "react";
import styled from "styled-components/macro";
import Img from "../assets/logo_branco.png";
import { Link } from "react-router-dom";

const NavbarContainer = styled.div`
  width: 100%;
  height: 80px;
  z-index: 20;
  background: #282828;
`;

const NavbarWrap = styled.div`
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  z-index: 20;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.div`
  width: 90px;
  height: 45px;
  margin-right: 100px;
  background: url(${Img}) 0 45% no-repeat;
  background-size: 100% 100%;
  cursor: pointer;
`;

const Nav = styled.nav`
  flex: 1;
  position: relative;
  padding-left: 0px;
`;

const NavLink = styled(Link)`
  color: #000;
  padding: 0 15px;
  font-size: 16px;
  line-height: 80px;
  font-weight: 700;
  color: #ffffff;
  text-decoration: none;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarWrap>
        <Logo />
        <Nav>
          <NavLink to="/">A TAGHOS</NavLink>
          <NavLink to="/">SOLUÇÕES</NavLink>
          <NavLink to="/">HYPER CACHE</NavLink>
          <NavLink to="/">SINGULAR CDN</NavLink>
          <NavLink to="/">TAGHOS.DATA</NavLink>
          <NavLink to="/">CERTIFICAÇÕES</NavLink>
          <NavLink to="/">APRENDA MAIS</NavLink>
        </Nav>
      </NavbarWrap>
    </NavbarContainer>
  );
};

export default Navbar;
