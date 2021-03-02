/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: ['gatsby-plugin-netlify-cms', 'gatsby-plugin-react-helmet', {
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
  {
    resolve: 'gatsby-plugin-google-fonts',
    options: {
      fonts: [
        'Bitter',
        'Vollkorn',
        'Montserrat',
        'source sans pro:300,400,400i,700', // you can also specify font weights and styles
      ],
      display: 'swap',
    },
  },
  'gatsby-transformer-remark', 'gatsby-plugin-emotion'],

};
