const path = require('path');

module.exports = {
  entry: ['./static/src/app.js'],
  output: {
    path: path.resolve(__dirname, './static/js/bundles'),
    filename: 'bundle.js'
  },
  mode:"production"
};