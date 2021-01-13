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
  justify-content: center;
  align-items: center;
  width: 50%;
  border: 3px solid green;
  border-radius: 5px;
  height: 100%;
`;

const LinkItem = styled.a`
  margin: 0 3rem 0 3rem;
  font-size: 2rem;
`;

const Header = () => (
  <Container>
    <LinkContainer>
      <LinkItem href="/">Home</LinkItem>
      <LinkItem href="blog">Blog</LinkItem>
      <LinkItem href="projects">Projects</LinkItem>
    </LinkContainer>
  </Container>
);

export default Header;
