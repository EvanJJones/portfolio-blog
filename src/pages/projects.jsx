import React from 'react';
import { graphql } from 'gatsby';

import Project from '../components/Project';
import Layout from '../components/Layout';

export default function Projects({ data }) {
  const projectsArray = data.allMarkdownRemark.edges;
  return (
    <Layout>
      {projectsArray.map((project) => (
        <Project project={project.node} key={project.node.id} />
      ))}
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
          tech
          screenshot {
            publicURL
          }
        }
      }
    }
  }
}`;
