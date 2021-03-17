import React from 'react';
import styled from '@emotion/styled';
import useDarkStore from '../state/useDarkStore';

const PostContainer = styled.div`
  margin: 2rem;
`;
const Title = styled.h1`
  color: ${(props) => (!props.dark ? props.theme.colors.text : props.theme.altColors.text)};
`;
const Description = styled.h3`
  color: ${(props) => (!props.dark ? props.theme.colors.text : props.theme.altColors.text)};
`;
const Date = styled.h3`
  color: ${(props) => (!props.dark ? props.theme.colors.text : props.theme.altColors.text)};
`;
const Text = styled.div`
  color: ${(props) => (!props.dark ? props.theme.colors.text : props.theme.altColors.text)};
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
