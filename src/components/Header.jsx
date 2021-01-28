import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  width: 100%;
  height: 5vh;
  background-color: ${(props) => props.theme.colors.background};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const LinkContainer = styled.div`
background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  border: 2px solid ${(props) => props.theme.colors.headerBorder};
  /* border-radius: 5px; */
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  height: 100%;
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    width: 80%;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.xlg}) {
    width: 50%;
  }
`;

const LinkItem = styled.a`
  font-size: 1.5rem;
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: 2rem;
  }
`;

const Header = () => (
  <Container>
    <LinkContainer>
      <LinkItem href="/">Home</LinkItem>
      <LinkItem href="/blog">Blog</LinkItem>
      <LinkItem href="/projects">Projects</LinkItem>
    </LinkContainer>
  </Container>
);

export default Header;
