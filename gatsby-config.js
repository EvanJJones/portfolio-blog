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
  {
    resolve: 'gatsby-plugin-google-gtag',
    options: {
      // You can add multiple tracking ids and a pageview event will be fired for all of them.
      trackingIds: [
        'G-5DFTPES00D',
      ],
      // This object gets passed directly to the gtag config command
      // This config will be shared across all trackingIds
      gtagConfig: {
        anonymize_ip: true,
        cookie_expires: 0,
      },
      // This object is used for configuration specific to this plugin
      pluginConfig: {
        // Puts tracking script in the head instead of the body
        head: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ['/admin/**'],
      },
    },
  },
  'gatsby-transformer-remark', 'gatsby-plugin-emotion', 'gatsby-plugin-dark-mode'],

};
