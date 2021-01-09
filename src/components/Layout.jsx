import React from 'react';
import styled from '@emotion/styled';
import { ThemeProvider } from '@emotion/react';
import Timeline from './Timeline';
import Header from './Header';

const theme = {
  colors: {
    background: '#E7ECEF',
    headerBackground: 'white',
    timelineBackground: 'white',
  },
};

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  height: 100%;
`;
const Content = styled.div`
  margin-bottom: 4vh;
  margin-left: 1rem;
  
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
