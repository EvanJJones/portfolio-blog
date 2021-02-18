/* eslint-disable max-len */
import React from 'react';
import { graphql } from 'gatsby';
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
  /* border: 2px solid ${(props) => props.theme.colors.bodyBorder}; */
  /* border-radius: 5px; */
  margin: 0 0 2rem 0;
  width: 90%;
  background-color: ${(props) => props.theme.colors.bodyBackground};
  /* box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23); */
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    width: 80%;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.xlg}) {
    width: 65%;
  }
`;

const Name = styled.h1`
  font-size: 3rem;
  font-family: 'Vollkorn', 'Bitter', serif;
  font-weight: 500;
  color: #3f6780;
  text-align: left;
  margin: 0 0 0 2rem;
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: 5rem;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.xlg}) {
    font-size: 5rem;
    margin: 0 0 0 5rem;
  }
`;

const TextContainer = styled.div`
  padding: 0 5% 0 5%;
  font-size: 1.75rem;
  font-family: 'Montserrat', 'Bitter', serif;
  font-weight: 500;
`;

export default function Home({ data }) {
  const info = data.allMarkdownRemark.edges;
  const mainText = info[0].node.html;

  return (
    <Layout>
      <MainContainer>
        <LeftDiv>
          <Name>Evan Jones</Name>
          <TextContainer dangerouslySetInnerHTML={{ __html: mainText }} />
          <ContactLinks />
        </LeftDiv>
        {/* <RightDiv>
          <Name>Time</Name>
        </RightDiv> */}
      </MainContainer>
    </Layout>
  );
}

export const query = graphql`
query basicInfoQuery {
  allMarkdownRemark(filter: {frontmatter: {location: {ne: null}}}) {
    edges {
      node {
        frontmatter {
          location
          title
        }
        html
      }
    }
  }
}
`;
