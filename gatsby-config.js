const siteContent = require('./content/site.json')

module.exports = {
  siteMetadata: {
    ...siteContent.site
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaultQuality: 80
      }
    },
    `gatsby-transformer-sharp`,
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        icon: false,
        svgoConfig: {
          plugins: [{ removeViewBox: false }]
        }
      }
    },
    {
      // https://www.gatsbyjs.org/packages/gatsby-plugin-manifest/#using-with-gatsby-plugin-offline
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: siteContent.site.siteTitle,
        short_name: siteContent.site.siteTitle,
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#141414',
        icon: siteContent.site.siteIcon,
        display: 'standalone',
        cache_busting_mode: 'none'
      }
    },
    `gatsby-plugin-offline`,
    // The only required option is the domain
    {
      resolve: `gatsby-plugin-plausible`,
      options: {
        domain: siteContent.site.siteUrl.replace('https://', '')
      }
    }
  ]
}
