/* eslint-disable max-len */
import React from 'react';
import styled from '@emotion/styled';
import Layout from '../../components/V1/Layout';
import ContactLinks from '../../components/V1/ContactLinks';

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  height: 80vh;
  width: 100%;
`;

const LeftDiv = styled.div`
  border: 3px solid red;
  border-radius: 5px;
  margin: 1rem;
  width: 90%;
  @media (min-width: ${(props) => props.theme.breakpoints.xlg}) {
    width: 45%;
  }
`;

const RightDiv = styled.div`
  border: 3px solid blue;
  border-radius: 5px;
  margin: 1rem;
  width: 90%;
  @media (min-width: ${(props) => props.theme.breakpoints.xlg}) {
    width: 45%;
  }
`;

const Name = styled.h1`
  font-size: 7rem;
  text-align: center;
  margin: 0 0 2rem 0;
`;

const TextContainer = styled.div`
  padding: 10%;
  font-size: 1.75rem;
`;

export default function Home() {
  return (
    <Layout>
      <MainContainer>
        <LeftDiv>
          <Name>Evan Jones</Name>
          <ContactLinks />
          <TextContainer>
            I am a full-stack web developer with a certificate from Harvard Extension School. I love to make websites with HTML, CSS, Javascript, and React. Plus I make games with things like Maya, and Unity. I strive to make interesting, beautiful and challenging things.
          </TextContainer>
        </LeftDiv>
        <RightDiv>
          <Name>Time</Name>
        </RightDiv>
      </MainContainer>
    </Layout>
  );
}
