import React from 'react';
import styled from '@emotion/styled';
import Layout from '../components/Layout';

const TestDiv = styled.div`
  color: red;
`;

export default function Home() {
  return (
    <Layout>
      <TestDiv>
        <h1>Evan Jones</h1>
        <a href="https://linkedin.com/in/evanjjones/">linkedin </a>
        <a href="https://github.com/evanjjones/">Github</a>
      </TestDiv>
    </Layout>
  );
}
