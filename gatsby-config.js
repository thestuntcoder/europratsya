require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Europratsya`,
    siteUrl: `https://europratsya.com/`,
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-postcss',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: process.env.GATSBY_SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        token: process.env.SANITY_TOKEN,
        watchMode: true,
        overlayDrafts: true,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.GATSBY_ALGOLIA_API_KEY,
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
        queries: require('./src/utils/algolia-queries'),
        chunkSize: 10000,
      },
    },

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/locales`,
        name: 'locale',
      },
    },
    {
      resolve: 'gatsby-plugin-react-i18next',
      options: {
        localeJsonSourceName: 'locale',
        languages: ['en', 'uk', 'de'],
        defaultLanguage: 'en',
        siteUrl: 'https://europratsya.com/',
        i18nextOptions: {
          defaultNS: 'translation',
          lowerCaseLng: true,
          saveMissing: true,
          keySeparator: false,
          nsSeparator: false,
        },
      },
    },
  ],
};

function requireConfig(path) {
  try {
    return require(path);
  } catch (e) {
    console.error(
      'Failed to require sanity.json. Fill in projectId and dataset name manually in gatsby-config.js'
    );
    return {
      api: {
        projectId: process.env.GATSBY_SANITY_PROJECT_ID || '',
        dataset: process.env.SANITY_DATASET || '',
      },
    };
  }
}
