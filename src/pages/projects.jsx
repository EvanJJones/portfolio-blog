import React from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';

import Project from '../components/Project';
import Layout from '../components/Layout';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: center;
`;

export default function Projects({ data }) {
  const projectsArray = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <Container>
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
          date
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
