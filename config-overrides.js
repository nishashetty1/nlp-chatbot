const webpack = require('webpack');

module.exports = function override(config) {
  const fallback = config.resolve.fallback || {};
  Object.assign(fallback, {
    "fs": false,
    "path": require.resolve("path-browserify"),
    "util": require.resolve("util/"),
    "os": require.resolve("os-browserify/browser")
  });
  config.resolve.fallback = fallback;
  
  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    })
  ]);
  
  return config;
};