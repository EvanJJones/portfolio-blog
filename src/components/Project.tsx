import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment'

export const Project = ({project}) => {
  const {html, frontmatter} = project
  const image = frontmatter.screenshot.publicURL
  const date = moment().format('MMMM YYYY')
  return (
    <div>
      <h1>{frontmatter.title}</h1>
      <h3>{frontmatter.description}</h3>
      <h3>{date}</h3>
      <a href={`https://${frontmatter.link}`}><h3>Link</h3></a>
      <a href={`https://${frontmatter.source}`}><h3>Source</h3></a>
      <img src={image} />
      {frontmatter.tech.map(item => (
        <div key={item}>{item}</div>
      ))}
      <div dangerouslySetInnerHTML={{ __html: html }} />
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