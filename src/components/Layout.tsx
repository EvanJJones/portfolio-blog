import React from "react"
import styled from '@emotion/styled';
import {Timeline} from '../components/Timeline';
import { Header } from '../components/Header';

const Container = styled.div`
  
`
const Content = styled.div`
  margin-bottom: 4vh;
  margin-left: 1rem;
`

export default function Layout({ children }) {
  return (
    <Container>
      <Header />
        <Content>
          {children}
        </Content>
      <Timeline />
    </Container>
  )
}