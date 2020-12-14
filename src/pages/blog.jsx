import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import { BlogPost } from '../components/BlogPost.tsx';

export default function Blog({ data }) {
  const blogArray = data.allMarkdownRemark.edges;

  return (

    <div>
      {blogArray.map((post) => (
        <BlogPost post={post.node} />
      ))}

    </div>
  );
}

Blog.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape({
        node: PropTypes.shape({
          html: PropTypes.string,
          frontmatter: PropTypes.shape({
            title: PropTypes.string,
            description: PropTypes.string,
          }),
        }),
      })),
    }),
  }).isRequired,
};

export const query = graphql`
query MyQuery {
  allMarkdownRemark {
    edges {
      node {
        id
        frontmatter {
          title
          date
          description
        }
        html
      }
    }
  }
}
`;
