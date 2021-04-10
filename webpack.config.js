const commonConfig = require("./build-utils/webpack.common");

const { merge } = require("webpack-merge");

module.exports = () => {
  let envConfig;

  if (process.env.NODE_ENV === "production") {
    envConfig = require(`./build-utils/webpack.prod.js`);
  } else {
    envConfig = require(`./build-utils/webpack.dev.js`);
  }
  const mergedConfig = merge(commonConfig, envConfig);

  return mergedConfig;
};
