import React from 'react';
import styled from '@emotion/styled';
import useDarkStore from '../state/useDarkStore';

const Container = styled.div`
  /* border: 2px solid gray; */
  background-color: ${(props) => (!props.dark ? props.theme.colors.bodyBackground : props.theme.altColors.bodyBackground)};
  // props.theme.colors.bodyBackground};
  /* box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23); */
  width: 100%;
  height: 20%auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  justify-content: center;
  @media (min-width: ${(props) => props.theme.breakpoints.xlg}) {
    justify-content: flex-start;
  }
`;
const Image = styled.img`
  margin: .5rem;
  max-width: 80%;
  max-height: 15rem;
  width: auto;
  height: auto;
  /* object-fit: cover; */
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
  color: ${(props) => (!props.dark ? props.theme.colors.text : props.theme.altColors.text)};
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 90%;
  }
`;
const Title = styled.div`
  font-size: 2rem;
  color: ${(props) => (!props.dark ? props.theme.colors.projectTitle : props.theme.altColors.projectTitle)};
`;
const Date = styled.span`
  font-size: 1.4rem;
  color: ${(props) => (!props.dark ? props.theme.colors.text : props.theme.altColors.text)};
`;
const Content = styled.div`
  font-size: 1.1rem;
  color: ${(props) => (!props.dark ? props.theme.colors.text : props.theme.altColors.text)};
`;
const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
const Link = styled.a`
  font-size: 1.5rem;
  color: ${(props) => (!props.dark ? props.theme.colors.projectLink : props.theme.altColors.projectLink)};
`;
const Label = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${(props) => (!props.dark ? props.theme.colors.projectTitle : props.theme.altColors.projectTitle)};
`;
const Info = styled.span`
  font-weight: normal;
  color: ${(props) => (!props.dark ? props.theme.colors.text : props.theme.altColors.text)};
`;

const Project = ({ project }) => {
  const dark = useDarkStore((state) => state.dark);

  const { html, frontmatter } = project;
  const image = frontmatter.screenshot.publicURL;
  const { date } = frontmatter;
  const tech = frontmatter.tech.join(', ');

  return (
    <Container dark={dark}>
      <Image src={image} alt={frontmatter.title} />
      <ProjectInfo>
        <Title dark={dark}>
          {frontmatter.title}
          {' '}
          <Date dark={dark}>{date}</Date>
        </Title>
        <Content dark={dark} dangerouslySetInnerHTML={{ __html: html }} />
        <Label dark={dark}>
          Type:
          <Info dark={dark}>
            {' '}
            {frontmatter.type}
          </Info>
        </Label>
        <Label dark={dark}>
          For:
          <Info dark={dark}>
            {' '}
            {frontmatter.for}
          </Info>
        </Label>
        <Label dark={dark}>
          Tech:
          {' '}
          <Info dark={dark}>{tech}</Info>
        </Label>
        <LinkContainer>
          <Link dark={dark} href={frontmatter.link}>Link</Link>
          <Link dark={dark} href={frontmatter.source}>Source</Link>
        </LinkContainer>
      </ProjectInfo>
    </Container>
  );
};

export default Project;
