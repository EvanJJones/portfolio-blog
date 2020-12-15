import React from 'react';
import { graphql } from 'gatsby';
import PropTypes, { string } from 'prop-types';

export default function Projects({ data }) {
  console.log(data);
  return (
    <div>This is the projects page</div>
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
            tech: PropTypes.arrayOf(string),
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
        }
      }
    }
  }
}`;
