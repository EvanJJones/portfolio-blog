import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  width: 100%;
  height: 5vh;
  margin-top: 1rem;
  background-color: ${(props) => props.theme.colors.background};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const LinkContainer = styled.div`
  /* background-color: white; */
  padding: 1rem 0 1rem 0;
  margin: 1rem 0 1rem 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  /* border: 2px solid ${(props) => props.theme.colors.headerBorder}; */
  /* border-radius: 5px; */
  /* box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23); */
  height: 100%;
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    width: 80%;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.xlg}) {
    width: 50%;
  }
`;

const LinkItem = styled.a`
  font-size: 2.5rem;
  font-weight: 500;
  margin-right: 2rem;
  margin-left: 1rem;
  text-decoration: none;
  font-family: 'Vollkorn', 'Bitter', serif;
  color: #003352;
  &:hover {
    color: #005d97;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: 2rem;
    margin-right: 4rem;
    margin-left: 2rem;
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
