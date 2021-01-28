import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';

const Footer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: left;
  bottom: 0;
  height: 4vh;
  width: 100%;
  background-color: ${(props) => props.theme.colors.timelineBackground};
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  border-top: 2px solid ${(props) => props.theme.colors.timelineBorder};
  padding-left: 1rem;
`;

export default function Header() {
  return (
    <StaticQuery
      query={graphql`
      query Version {
        allMarkdownRemark(filter: {html: {eq: ""}}) {
          edges {
            node {
              frontmatter {
                date
                title
              }
            }
          }
        }
      }
      `}
      render={(data) => (
        <Footer>
          <a href="/">Current</a>
          {data.allMarkdownRemark.edges.map((version) => (
            <a href={version.node.frontmatter.title}>{version.node.frontmatter.title}</a>
          ))}
        </Footer>
      )}
    />
  );
}
