import React from 'react';
import styled from '@emotion/styled';
import Layout from '../components/Layout';
import ContactLinks from '../components/ContactLinks';

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 80vh;
  width: 100%;
`;

const LeftDiv = styled.div`
  border: 3px solid red;
  border-radius: 5px;
  margin: 1rem;
  width: 100%;
`;

const RightDiv = styled.div`
  border: 3px solid blue;
  border-radius: 5px;
  margin: 1rem;
  width: 100%;
`;

const Name = styled.h1`
  font-size: 7rem;
  text-align: center;
  margin: 0;
`;

export default function Home() {
  return (
    <Layout>
      <MainContainer>
        <LeftDiv>
          <Name>Evan Jones</Name>
          <ContactLinks />
        </LeftDiv>
        <RightDiv>
          Nothing
        </RightDiv>
      </MainContainer>
    </Layout>
  );
}
