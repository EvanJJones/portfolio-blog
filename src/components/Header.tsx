import React from 'react';
// import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Container = styled.div`
  width: 100%;
  height: 5vh;
  background-color: beige;
`

export const Header = () => {
  return (
    <Container> 
      <a href={"/"}>Home</a>
      <a href={"blog"}>Blog</a>
      <a href={"projects"}>Projects</a>
    </Container>
  )
}