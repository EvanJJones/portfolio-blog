import React from "react"
import styled from '@emotion/styled';
import {Timeline} from '../components/Timeline';

const Container = styled.div`
  
`
const Content = styled.div`
  margin-bottom: 4vh;
  margin-left: 1rem;
`

export default function Layout({ children }) {
  return (
    <Container>
      <Content>
        {children}
      </Content>
      <Timeline />
    </Container>
  )
}