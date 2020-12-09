import React from "react"
import { graphql } from 'gatsby'

export default function Blog({data}) {
  console.log(data)
  return (
    <div>
      <div>{data.allMarkdownRemark.edges.map(post => (
        <div>{post.node.frontmatter.title}</div>
      )
      )}</div>
    </div>
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