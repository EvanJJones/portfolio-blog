/* eslint-disable max-len */
import React from 'react';
import styled from '@emotion/styled';
import Layout from '../components/Layout';
import ContactLinks from '../components/ContactLinks';

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
  padding: 10rem;
  font-size: 20px;
`;

export default function Home() {
  return (
    <Layout>
      <MainContainer>
        <LeftDiv>
          <Name>Evan Jones</Name>
          <ContactLinks />
          <TextContainer>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </TextContainer>
        </LeftDiv>
        <RightDiv>
          Nothing
        </RightDiv>
      </MainContainer>
    </Layout>
  );
}
