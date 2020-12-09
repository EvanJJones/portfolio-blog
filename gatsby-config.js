/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [`gatsby-plugin-netlify-cms`, {     resolve: `gatsby-source-filesystem`,
  options: {
    name: `markdown-pages`,
    path: `${__dirname}/content/blog`,
  },
},
`gatsby-transformer-remark`,],
  
}
