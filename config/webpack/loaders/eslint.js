module.exports = {
  test: /\.(js$)$/,
  loader: 'eslint-loader',
  exclude: /node_modules/,
  enforce: 'pre',
  options: {}
}
