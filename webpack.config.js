const path = require('path');

module.exports = {
    mode: 'none',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        static: './dist',
      },
      module: {
        rules: [
          {
            test: /\.s[ac]ss$/i,
            use: [
              
              "style-loader",
              
              "css-loader",
              
              "sass-loader",
            ],
          },
        ],
      },  
};