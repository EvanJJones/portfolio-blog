import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';

const Footer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  bottom: 0;
  height: 4vh;
  width: 100%;
  background-color: ${(props) => props.theme.colors.timelineBackground};
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  /* border-top: 2px solid ${(props) => props.theme.colors.timelineBorder}; */
  padding-left: 1rem;
`;

const Link = styled.a`
  margin: 0 1rem 0 1rem;
  text-decoration: none;
  color: #3a2512;
  &:hover {
    color: #005d97;
  }
`;

export default function Header() {
  return (
    <StaticQuery
      query={graphql`
      query Version {
        allMarkdownRemark(filter: {frontmatter: {versionDate: {ne: null}}}) {
          pageInfo {
            perPage
          }
          edges {
            node {
              html
              frontmatter {
                title
                versionDate
              }
            }
          }
        }
      }
      
      `}
      render={(data) => (
        <Footer>
          <Link href="/">Current</Link>
          {data.allMarkdownRemark.edges.map((version) => (
            <Link href={version.node.frontmatter.title}>{version.node.frontmatter.title}</Link>
          ))}
        </Footer>
      )}
    />
  );
}
