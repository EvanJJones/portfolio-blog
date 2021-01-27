/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: ['gatsby-plugin-netlify-cms', {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'markdown-pages',
      path: `${__dirname}/content/blog`,
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'projects',
      path: `${__dirname}/content/projects`,
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'versions',
      path: `${__dirname}/content/versions`,
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'versions',
      path: `${__dirname}/content/basicInfo`,
    },
  },
  'gatsby-transformer-remark', 'gatsby-plugin-emotion'],

};
