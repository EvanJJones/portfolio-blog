import React from 'react';
import { graphql } from 'gatsby';

import BlogPost from '../components/BlogPost';
import Layout from '../components/Layout';

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
