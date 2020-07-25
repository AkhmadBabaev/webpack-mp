const HtmlWebpackPlugin = require('html-webpack-plugin');
const glob = require('glob');

const dirs = require('./dirs');
const { parseFile } = require('./utils');

/**
 * Generates HTML pages using the HtmlWebpackPlugin.
 *
 * @return {array} List of the HtmlWebpackPlugin objects.
 */
module.exports = () => {
  const files = glob.sync(`${dirs.pages.path}/*/*.pug`);

  return files.map((file) => {
    const { name } = parseFile(file);

    return new HtmlWebpackPlugin({
      currentEnv: process.env.NODE_ENV,
      filename: `${name}.html`,
      template: file,
      minify: false,
      inject: false,
      hash: false,
    });
  });
};
