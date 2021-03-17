import React from 'react';
import styled from '@emotion/styled';
import { ThemeProvider } from '@emotion/react';
import Timeline from './Timeline';
import Header from './Header';
import theme from '../styles/theme';
import useDarkStore from '../state/useDarkStore';

const Container = styled.div`
  background-color: ${(props) => (!props.dark ? props.theme.colors.background : props.theme.altColors.background)};
  height: 100%;
`;
const Content = styled.div`
  margin-bottom: 4vh;
  margin-top: 2rem;
  height: 100%;
`;

export default function Layout({ children }) {
  const dark = useDarkStore((state) => state.dark);
  return (
    <ThemeProvider theme={theme}>
      <Container dark={dark}>
        <Header />
        <Content>
          {children}
        </Content>
        <Timeline />
      </Container>
    </ThemeProvider>
  );
}
