import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import { Project } from '../components/Project.tsx';

export default function Projects({ data }) {
  const projectsArray = data.allMarkdownRemark.edges;
  console.log(projectsArray);
  return (
    <div>
      {projectsArray.map((project) => (
        <Project project={project.node} key={project.node.id} />
      ))}
    </div>
  );
}

Projects.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape({
        node: PropTypes.shape({
          html: PropTypes.string,
          frontmatter: PropTypes.shape({
            title: PropTypes.string,
            date: PropTypes.string,
            link: PropTypes.string,
            source: PropTypes.string,
            tech: PropTypes.arrayOf(PropTypes.string),
            screenshot: PropTypes.shape({
              publicURL: PropTypes.string,
            }),
          }),
        }),
      })),
    }),
  }).isRequired,
};

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
