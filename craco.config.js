const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#000000',
              '@border-color-base': '#000000',
              '@border-radius-base': '4px',
              '@border-width-base': '2px',
              '@font-family': 'proxima-nova, sans-serif',
              '@dropdown-selected-color': '#ffffff',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
