module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        loader: "postcss-loader",
        options: {
          postcssOptions: {
            syntax: require("postcss-scss"),
            plugins: require("@mozaic-ds/css-dev-tools/postcssPluginConfig"),
          },
        },
      },
    ],
  },
};
