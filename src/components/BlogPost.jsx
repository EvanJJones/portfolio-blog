import React from 'react';
import styled from '@emotion/styled';
import useDarkStore from '../state/useDarkStore';

const PostContainer = styled.div`
  margin: .75rem;
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    width: 80%;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.xlg}) {
    width: 65%;
  }
`;

const Title = styled.h1`
  color: var(--text);
`;
const Description = styled.h3`
  color: var(--text);
`;
const Date = styled.h3`
  color: var(--text);
`;
const Text = styled.div`
  color: var(--text);
  font-size: 1.25rem;
  line-height: 26px;
`;

export default function BlogPost({ post }) {
  const dark = useDarkStore((state) => state.dark);
  return (
    <PostContainer>
      <Title dark={dark}>{post.frontmatter.title}</Title>
      <Description dark={dark}>{post.frontmatter.description}</Description>
      <Date dark={dark}>{post.frontmatter.date}</Date>
      <Text dark={dark} dangerouslySetInnerHTML={{ __html: post.html }} />
    </PostContainer>
  );
}
