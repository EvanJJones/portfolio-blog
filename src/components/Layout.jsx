import React from 'react';
import styled from '@emotion/styled';
import { ThemeProvider } from '@emotion/react';
import Timeline from './Timeline';
import Header from './Header';
import theme from '../styles/theme';

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  height: 100%;
`;
const Content = styled.div`
  margin-bottom: 4vh;
  margin-top: 1rem;
  height: 100%;
`;

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header />
        <Content>
          {children}
        </Content>
        <Timeline />
      </Container>
    </ThemeProvider>
  );
}
