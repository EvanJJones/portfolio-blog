import React from 'react';
import PropTypes from 'prop-types';


export const Project = ({project}) => {
  return (
    <div>
      <h1>{project.frontmatter.title}</h1>
      <h3>{project.frontmatter.description}</h3>
      <h3>{project.frontmatter.source}</h3>
      <img src={project.frontmatter.screenshot.publicURL} />
      <div dangerouslySetInnerHTML={{ __html: project.html }} />
    </div>
  )
}


Project.propType = {
  node: PropTypes.shape({
    html: PropTypes.string,
    frontmatter: PropTypes.shape({
      title: PropTypes.string,
      date: PropTypes.string,
      link: PropTypes.string,
      source: PropTypes.string,
      tech: PropTypes.arrayOf(PropTypes.string),
      screenshot: PropTypes.shape({
        publicURL: PropTypes.string,
      }),
    }),
  }),
}