const theme = require('./src/themes/data');

module.exports = {
  siteMetadata: {
    title: 'METAKRONISMS demo',
    description: '',
    author: 'METAKRONISMS',
  },

  plugins: [
    'gatsby-plugin-better-jss',
    'gatsby-plugin-transition-link',
    'gatsby-plugin-react-helmet',

    {
      resolve: 'gatsby-plugin-metakronisms-content',
      options: {
        name: 'episodes',
        path: `${__dirname}/src/episodes`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'episodes',
        path: `${__dirname}/src/episodes`,
      },
    },

    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],

        gatsbyRemarkPlugins: [
          'gatsby-plugin-sharp',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 800,
              backgroundColor: 'transparent',
            },
          },
          // 'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          'gatsby-remark-autolink-headers',
        ],
      },
    },

    'gatsby-plugin-catch-links',

    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'METAKRONISMS demo',
        short_name: 'MK demo',
        start_url: '/',
        background_color: theme.backgroundColor,
        theme_color: theme.color,
        display: 'minimal-ui',
        // This path is relative to the root of the site.
        icon: 'src/images/gatsby-icon.png',
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    'gatsby-plugin-offline',
  ],
};
