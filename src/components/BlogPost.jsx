import React from 'react';

const BlogPost = ({ post }) => (
  <div>
    <h1>{post.frontmatter.title}</h1>
    <h3>{post.frontmatter.description}</h3>
    <div dangerouslySetInnerHTML={{ __html: post.html }} />
  </div>
);

export default BlogPost;
