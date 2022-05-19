const path = require('path');
// console.log(`dddd${[path.resolve(__dirname, '..'), 'node_modules']}`);
console.log(`src${path.resolve(__dirname, '../src')}`);

module.exports = {
  // stories: ['../src/stories/**/*.stories.tsx'],
  // stories: ['../src/stories/**/*.stories.@(js|jsx|ts|tsx)'],
  stories: ['../stories/**/*.stories.tsx'],
  // @see addon 種類 https://qiita.com/kichion/items/93ffe1ba773d26c20ff6
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-viewport',
    'storybook-addon-next-router',
  ],
  // staticDirs: ['../public'],
  framework: '@storybook/react',
  // Issue 暫定対応 @see https://github.com/storybookjs/storybook/issues/15336
  typescript: { reactDocgen: false },
  core: {
    builder: '@storybook/builder-webpack5',
  },
  // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.
  webpackFinal: async (config, { configType }) => {
    // node_modules上位の階層にset
    config.resolve.modules = [path.resolve(__dirname, '..'), 'node_modules'];
    // scssをset
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });
    // aliasをset
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../src'),
    };
    // Return the altered config
    return config;
  },
};
