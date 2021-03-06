import React from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import { Helmet } from 'react-helmet';

import Project from '../components/Project';
import Layout from '../components/Layout';
import useDarkStore from '../state/useDarkStore';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-content: center;
  width: 90%;
  margin: auto;
  background-color: var(--background);
  /* box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23); */
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    width: 80%;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.xlg}) {
    width: 65%;
  }
`;

export default function Projects({ data }) {
  const projectsArray = data.allMarkdownRemark.edges;
  const dark = useDarkStore((state) => state.dark);
  return (
    <Layout>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <title>Evan Jones Projects</title>
        <meta name="description" content="List of projects done by Evan Jones" />
      </Helmet>
      <Container dark={dark}>
        {projectsArray.map((project) => (
          <Project project={project.node} key={project.node.id} />
        ))}
      </Container>
    </Layout>
  );
}

export const query = graphql`
query Projects {
  allMarkdownRemark(filter: {frontmatter: {source: {ne: null}, link: {ne: null}}}) {
    edges {
      node {
        id
        html
        frontmatter {
          title
          date(formatString: "MMMM YYYY")
          for
          link
          source
          type
          tech
          screenshot {
            publicURL
          }
        }
      }
    }
  }
}`;
