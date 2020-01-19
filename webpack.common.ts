import { resolve } from 'path'

import webpack from 'webpack'

export const config: webpack.Configuration = {
  target: 'node',
  entry: {
    app: './src/index.ts'
  },
  output: {
    filename: '[name].bundle.js',
    path: resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    modules: [resolve(__dirname, './src'), 'node_modules'],
    extensions: ['.ts', '.js']
  }
}
