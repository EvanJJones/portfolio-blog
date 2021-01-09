import React from 'react';

import moment from 'moment';

const Project = ({ project }) => {
  const { html, frontmatter } = project;
  const image = frontmatter.screenshot.publicURL;
  const date = moment(frontmatter.date).format('MMM YYYY');

  return (
    <div>
      <h1>{frontmatter.title}</h1>
      <h3>{frontmatter.description}</h3>
      <h3>{date}</h3>
      <h3>{frontmatter.for}</h3>
      <a href={frontmatter.link}><h3>Link</h3></a>
      <a href={frontmatter.source}><h3>Source</h3></a>
      <img src={image} alt={frontmatter.title} width="200px" height="200px" />
      {frontmatter.tech.map((item) => (
        <div key={item}>{item}</div>
      ))}
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

export default Project;
