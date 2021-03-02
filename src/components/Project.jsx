import React from 'react';
import styled from '@emotion/styled';

import moment from 'moment';

const Container = styled.div`
  /* border: 2px solid gray; */
  background-color: ${(props) => props.theme.colors.bodyBackground};
  /* box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23); */
  width: 100%;
  height: 20%auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;
const Image = styled.img`
  margin: .5rem;
  max-width: 80%;
  height: auto;
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    max-width: 80%;

  }
  @media (min-width: ${(props) => props.theme.breakpoints.xlg}) {
    max-width: 40%;
  }
`;
const ProjectInfo = styled.div`
  width: 45%;
  margin: 1rem;
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 90%;
  }
`;
const Title = styled.div`
  font-size: 2rem;
`;
const Date = styled.span`
  font-size: 1.4rem;
`;
const Content = styled.div`
  font-size: 1.1rem;
`;
const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
const Link = styled.a`
  font-size: 1.5rem;
`;
const Label = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
`;
const Info = styled.span`
  font-weight: normal;
`;

const Project = ({ project }) => {
  const { html, frontmatter } = project;
  const image = frontmatter.screenshot.publicURL;
  const date = moment(frontmatter.date).format('MMM YYYY');
  const tech = frontmatter.tech.join(', ');

  return (
    <Container>
      <Image src={image} alt={frontmatter.title} />
      <ProjectInfo>
        <Title>
          {frontmatter.title}
          {' '}
          <Date>{date}</Date>
        </Title>
        <Content dangerouslySetInnerHTML={{ __html: html }} />
        <Label>
          Type:
          <Info>
            {' '}
            {frontmatter.type}
          </Info>
        </Label>
        <Label>
          For:
          <Info>
            {' '}
            {frontmatter.for}
          </Info>
        </Label>
        <Label>
          Tech:
          {' '}
          <Info>{tech}</Info>
        </Label>
        <LinkContainer>
          <Link href={frontmatter.link}>Link</Link>
          <Link href={frontmatter.source}>Source</Link>
        </LinkContainer>
      </ProjectInfo>
    </Container>
  );
};

export default Project;
