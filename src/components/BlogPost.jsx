import React from 'react';
import styled from '@emotion/styled';

const PostContainer = styled.div`
  margin: 2rem;
`;

export default function BlogPost({ post }) {
  return (
    <PostContainer>
      <h1>{post.frontmatter.title}</h1>
      <h3>{post.frontmatter.description}</h3>
      <h3>{post.frontmatter.date}</h3>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </PostContainer>
  );
}
