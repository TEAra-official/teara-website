const urlPrefix = process.env.URL_PREFIX ? '/' + process.env.URL_PREFIX : ''

module.exports = {
  assetPrefix: urlPrefix,
  basePath: urlPrefix,
  trailingSlash: true,  
  pageExtensions: ['page.jsx'],
  images: {
    loader: 'akamai',
    path: '',
  },
  publicRuntimeConfig: { urlPrefix },
};
