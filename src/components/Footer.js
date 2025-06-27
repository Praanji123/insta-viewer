import React from 'react';
import styled from 'styled-components';
import { FaHeart, FaGithub, FaTwitter } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: rgba(0, 0, 0, 0.2);
  padding: 20px;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterText = styled.p`
  margin-bottom: 10px;
  opacity: 0.8;
  
  svg {
    color: #e91e63;
    margin: 0 5px;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 15px;
`;

const SocialLink = styled.a`
  color: white;
  font-size: 20px;
  opacity: 0.7;
  transition: opacity 0.3s ease;
  
  &:hover {
    opacity: 1;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterText>
          Made with <FaHeart /> for Instagram lovers
        </FooterText>
        <FooterText>
          © 2024 InstaViewer. View Instagram content anonymously and for free.
        </FooterText>
        <SocialLinks>
          <SocialLink href="#" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </SocialLink>
          <SocialLink href="#" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </SocialLink>
        </SocialLinks>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer; 