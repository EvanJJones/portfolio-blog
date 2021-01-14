import React from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';

import BlogPost from '../components/BlogPost';
import Layout from '../components/Layout';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  border: 3px solid blue;
  border-radius: 5px;
  height: 100%;
  margin: auto;
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    width: 80%;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.xlg}) {
    width: 50%;
  }
`;

export default function Blog({ data }) {
  const blogArray = data.allMarkdownRemark.edges;

  return (

    <Layout>
      <Container>
        {blogArray.map((post) => (
          <BlogPost post={post.node} key={post.node.id} />
        ))}
      </Container>
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
