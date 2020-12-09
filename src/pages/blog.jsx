import React from "react"
import { graphql } from 'gatsby'

export default function Blog({data}) {
  console.log(data)
  return (

      <div>{data.allMarkdownRemark.edges.map(post => (
        <>
          <h1>{post.node.frontmatter.title}</h1>
          <h3>{post.node.frontmatter.description}</h3>
          <div dangerouslySetInnerHTML={{__html: post.node.html}} />
        </>
      )
      )}</div>
    )
}

export const query = graphql`
query MyQuery {
  allMarkdownRemark {
    edges {
      node {
        id
        frontmatter {
          title
          date
          description
        }
        html
      }
    }
  }
}
`