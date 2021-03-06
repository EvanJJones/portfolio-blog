import React from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import { Helmet } from 'react-helmet';

import BlogPost from '../components/BlogPost';
import Layout from '../components/Layout';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: auto;
  width: 100%;
  background-color: var(--bodyBackground);
  /* box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23); */
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    width: 80%;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.xlg}) {
    width: 65%;
  }
`;

export default function Blog({ data }) {
  const blogArray = data.allMarkdownRemark.edges;

  return (

    <Layout>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <title>Evan Jones Blog</title>
        <meta name="description" content="Blog of web developer Evan Jones" />
      </Helmet>
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
  allMarkdownRemark(filter: {frontmatter: {source: {eq: null}, link: {eq: null}, location: {eq: null}, description: {ne: null}}}) {
    edges {
      node {
        id
        frontmatter {
          title
          date(formatString: "MMMM Do YYYY")
          description
        }
        html
      }
    }
  }
}
`;
