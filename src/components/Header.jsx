import React from 'react';
import styled from '@emotion/styled';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';
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
  background-color: var(--headerBackground);
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
  color: var(--headerLink);
  &:hover {
    color: var(--headerLinkHover);
  }
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: 2.5rem;
    margin-right: 4rem;
    margin-left: 2rem;
  }
`;

const Header = () => {
  const dark = useDarkStore((state) => state.dark);
  // const toggleDark = useDarkStore((state) => state.toggleDark);

  return (
    <Container dark={dark}>
      <LinkContainer dark={dark}>
        <LinkItem dark={dark} href="/">Home</LinkItem>
        <LinkItem dark={dark} href="/blog">Blog</LinkItem>
        <LinkItem dark={dark} href="/projects">Projects</LinkItem>
        <ThemeToggler>
          {({ theme, toggleTheme }) => (
            <label>
              <input
                type="checkbox"
                onChange={(e) => toggleTheme(e.target.checked ? 'dark' : 'light')}
                checked={theme === 'dark'}
              />
              {' '}
              Dark mode
            </label>
          )}
        </ThemeToggler>
      </LinkContainer>
    </Container>
  );
};
export default Header;
