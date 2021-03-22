import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import useDarkStore from '../state/useDarkStore';

const Container = styled.div`
  width: 100%;
  height: 5vh;
  /* margin-top: 1rem; */
  padding-top: 1rem;
  /* background-color: ${(props) => props.theme.colors.background}; */

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const LinkContainer = styled.div`
  /* background-color: white; */
  background-color: ${(props) => (!props.dark ? props.theme.colors.headerBackground : props.theme.altColors.headerBackground)};
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
    width: 65%;
  }
`;

const LinkItem = styled.a`
  font-size: 1.5rem;
  font-weight: 500;
  margin-right: 2rem;
  margin-left: 1rem;
  text-decoration: none;
  font-family: 'Vollkorn', 'Bitter', serif;
  color: ${(props) => (!props.dark ? props.theme.colors.headerLink : props.theme.altColors.headerLink)};
  &:hover {
    color: ${(props) => (!props.dark ? props.theme.colors.headerLinkHover : props.theme.altColors.headerLinkHover)};
  }
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: 2.5rem;
    margin-right: 4rem;
    margin-left: 2rem;
  }
`;

const Header = () => {
  const [localDark, setLocalDark] = useState(false);
  const dark = useDarkStore((state) => state.dark);
  const toggleDark = useDarkStore((state) => state.toggleDark);

  useEffect(() => {
    if (dark) {
      setLocalDark(true);
    }
  }, []);
  return (
    <Container dark={localDark}>
      <LinkContainer dark={localDark}>
        <LinkItem dark={localDark} href="/">Home</LinkItem>
        <LinkItem dark={localDark} href="/blog">Blog</LinkItem>
        <LinkItem dark={dark} href="/projects">Projects</LinkItem>
        <button type="button" onClick={toggleDark}>Toggle</button>
      </LinkContainer>
    </Container>
  );
};
export default Header;
