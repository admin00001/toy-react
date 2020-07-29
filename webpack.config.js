module.exports = {
  entry: './main.js',
  mode: 'development',
  optimization: {
    minimize: false
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                "@babel/preset-env",
                // {
                //   "useBuiltIns": "usage", // 只加入用到的es6新特性
                //   "corejs": 3
                // }
              ]
            ],
            plugins: [
              [
                "@babel/plugin-transform-react-jsx",
                {pragma: 'ToyReact.createElement'}
              ]
            ]
          }
        }
      }
    ]
  }
}
