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
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  border: 3px solid green;
  border-radius: 5px;
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
      <LinkItem href="/V1/">Home</LinkItem>
      <LinkItem href="/V1/blog/">Blog</LinkItem>
      <LinkItem href="/V1/projects">Projects</LinkItem>
    </LinkContainer>
  </Container>
);

export default Header;
