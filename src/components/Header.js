import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaInstagram, FaUser, FaImages } from 'react-icons/fa';

const HeaderContainer = styled.header`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  color: white;
  text-decoration: none;
  font-size: 24px;
  font-weight: 700;
  
  svg {
    margin-right: 10px;
    color: #e91e63;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
  
  @media (max-width: 768px) {
    gap: 15px;
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 8px 15px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
  
  svg {
    margin-right: 8px;
  }
  
  @media (max-width: 768px) {
    padding: 6px 10px;
    font-size: 14px;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo to="/">
        <FaInstagram />
        InstaViewer
      </Logo>
      <Nav>
        <NavLink to="/">
          <FaImages />
          Stories
        </NavLink>
        <NavLink to="/">
          <FaUser />
          Profile Pic
        </NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header; 