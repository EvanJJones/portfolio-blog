import React from 'react';
import PropTypes from 'prop-types';


export const BlogPost = ({post}) => {
  return (
    <div>
      <h1>{post.frontmatter.title}</h1>
      <h3>{post.frontmatter.description}</h3>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  )
}


BlogPost.propType = {
  node: PropTypes.shape({
    html: PropTypes.string,
    frontmatter: PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    }),
  })
}