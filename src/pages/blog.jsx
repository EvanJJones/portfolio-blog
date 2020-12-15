import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import { BlogPost } from '../components/BlogPost.tsx';
import Layout from '../components/Layout.tsx';

export default function Blog({ data }) {
  const blogArray = data.allMarkdownRemark.edges;

  return (

    <Layout>
      {blogArray.map((post) => (
        <BlogPost post={post.node} key={post.node.id} />
      ))}

    </Layout>
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
  allMarkdownRemark(filter: {frontmatter: {source: {eq: null}, link: {eq: null}}}) {
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
