import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from '@emotion/styled';
import useDarkStore from '../state/useDarkStore';

const Footer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  bottom: 0;
  height: 4vh;
  width: 100%;
  background-color: ${(props) => (!props.dark ? props.theme.colors.timelineBackground : props.theme.altColors.timelineBackground)};
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  /* border-top: 2px solid ${(props) => props.theme.colors.timelineBorder}; */
  padding-left: 1rem;
`;

const Link = styled.a`
  margin: 0 1rem 0 1rem;
  text-decoration: none;
  color: ${(props) => (!props.dark ? props.theme.colors.timelineText : props.theme.altColors.timelineText)};
  &:hover {
    color: ${(props) => (!props.dark ? props.theme.colors.timelineTextHover : props.theme.altColors.timelineTextHover)};
  }
`;

export default function Header() {
  const dark = useDarkStore((state) => state.dark);
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
        <Footer dark={dark}>
          <Link dark={dark} href="/">Current</Link>
          {data.allMarkdownRemark.edges.map((version) => (
            <Link dark={dark} href={version.node.frontmatter.title}>
              {version.node.frontmatter.title}
            </Link>
          ))}
        </Footer>
      )}
    />
  );
}
