import React from 'react';
import styled from '@emotion/styled';

import moment from 'moment';

const Container = styled.div`
  border: 3px solid gray;
  border-radius: 5px;
  width: 100%;
  height: 20%auto;
  display: flex;
  flex-direction: row;
  margin: 10px;
  padding: 10px;
  flex-wrap: wrap;
  /* justify-content: center; */
  @media (min-width: ${(props) => props.theme.breakpoints.xlg}) {
    width: 40%;
  }
  ;
`;
const Image = styled.img`
  width: 40%;
  margin: 1rem;
  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 90%;
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
      {/* <h1>{frontmatter.title}</h1>
      <h3>{frontmatter.description}</h3>
      <h3>{date}</h3>
      <h3>{frontmatter.for}</h3>
      <h3>{frontmatter.type}</h3>
      <a href={frontmatter.link}><h3>Link</h3></a>
      <a href={frontmatter.source}><h3>Source</h3></a>
      <img src={image} alt={frontmatter.title} width="200px" height="200px" />
      {frontmatter.tech.map((item) => (
        <div key={item}>{item}</div>
      ))}
      <div dangerouslySetInnerHTML={{ __html: html }} /> */}
    </Container>
  );
};

export default Project;
