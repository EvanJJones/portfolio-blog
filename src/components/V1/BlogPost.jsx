import React from 'react';
import moment from 'moment';

export default function BlogPost({ post }) {
  const date = moment(post.frontmatter.date).format('MMMM Do YYYY, h:mm a');
  return (
    <div>
      <h1>{post.frontmatter.title}</h1>
      <h3>{post.frontmatter.description}</h3>
      <h3>{date}</h3>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
}
