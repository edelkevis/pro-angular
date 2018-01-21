var webpack = require('webpack');
const path = require('path')

var config = {
  context: path.resolve(__dirname, 'src'), // `__dirname` is root of project and `src` is source
  entry: {
    app: './app.ts',
  },
  output: {
    path: path.resolve(__dirname, 'dist'), // `dist` is the destination
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'src'), // `__dirname` is root of the project
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Check for all js files
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src'),
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              ['es2015', {'modules': false}]
            ]
          }
        }]
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src'),
        use: [{
            loader: 'ts-loader',
            options: {
              transpileOnly: true
            }
        }]
      }
    ]
  },
  // devtool: "source-map" // Default development sourcemap
  devtool: 'eval-source-map',
};

// Check if build is running in production mode, then change the sourcemap type
if (process.env.NODE_ENV === "production") {
  config.devtool = ""; // No sourcemap for production

  // Add more configuration for production here like
  // Uglify plugin
  // Offline plugin
  // Etc,
}

module.exports = config;
