module.exports = {
  siteMetadata: {
    title: `Placermama`,
    description: `Los Angeles Flower Arrangements. Customizing flower arrangmenets perfect for suprising loved ones, for valentines day, and special occassions.`,
    author: `Placermama`,
  },
  plugins: [
    `gatsby-transformer-json`,
    `gatsby-plugin-styled-components`,
    "gatsby-plugin-postcss",
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "home_products",
        path: `${__dirname}/src/data/homeProducts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "testimonials",
        path: `${__dirname}/src/data/testimonials`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Playfair Display\:300,400,400i,700,800`,
          `Poppins\:300,400,400i,700,800`,
          `source sans pro\:300,400,400i,700`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `45156217344`,
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
