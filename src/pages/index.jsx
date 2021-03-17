/* eslint-disable max-len */
import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import Layout from '../components/Layout';
import ContactLinks from '../components/ContactLinks';
import useDarkStore from '../state/useDarkStore';

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  /* height: 80vh; */
  width: 100%;
`;

const MainSection = styled.main`
  /* border: 2px solid ${(props) => props.theme.colors.bodyBorder}; */
  /* border-radius: 5px; */
  margin: 0 0 2rem 0;
  width: 90%;
  background-color: ${(props) => (!props.dark ? props.theme.colors.bodyBackground : props.theme.altColors.bodyBackground)};
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
  color: ${(props) => (!props.dark ? props.theme.colors.nameColor : props.theme.altColors.nameColor)};
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
  color: ${(props) => (!props.dark ? props.theme.colors.text : props.theme.altColors.text)};
`;

export default function Home({ data }) {
  const info = data.allMarkdownRemark.edges;
  const mainText = info[0].node.html;
  const dark = useDarkStore((state) => state.dark);

  return (
    <Layout>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <title>Evan Jones Home</title>
        <meta name="description" content="Home of web developer Evan Jones" />
      </Helmet>
      <MainContainer>
        <MainSection dark={dark}>
          <Name dark={dark}>Evan Jones</Name>
          <TextContainer dark={dark} dangerouslySetInnerHTML={{ __html: mainText }} />
          <ContactLinks dark={dark} />
        </MainSection>
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
