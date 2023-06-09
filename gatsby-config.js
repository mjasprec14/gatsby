/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: 'Simple Recipes',
    description: 'Nice and clean recipes site',
    author: 'MJ Asprec',
    person: { name: 'John', age: 32 },
    simpleData: ['item 1', 'item 2'],
    complexData: [
      { name: 'John', age: 32 },
      { name: 'Jane', age: 42 },
    ],
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-root-import',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
  ],
};
