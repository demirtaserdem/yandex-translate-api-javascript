const path = require('path');

module.exports = {
  //babel için kullanılabilir.
  //entry: ["@babel/polyfill",'./static/src/app.js'], 
  
  entry: ['./static/src/app.js'],
  output: {
    path: path.resolve(__dirname, './static/js/bundles'),
    filename: 'bundle.js'
  },
  mode:"production",
  module: { //babel için kullanılabilir
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }
};