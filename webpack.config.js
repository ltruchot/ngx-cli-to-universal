const ngtools = require('@ngtools/webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
	context: path.join(__dirname, 'src'),
	entry: {
		main: './main.server.ts'
	},
	node: {
	  __dirname: false
	},
	resolve: {
		extensions: ['.ts', '.js', '.html']
	},
	target: 'node',
	output: {
		path: path.resolve(__dirname, 'dist-universal'),
		filename: '[name].js'
	},
	plugins: [
		new ngtools.AotPlugin({
			tsConfigPath: './tsconfig-universal.json'
		}),
		new CopyWebpackPlugin([
      { from: 'assets', to: 'assets' }
    ])
	],
	module: {
		rules: [{
			test: /\.ts$/,
			loader: '@ngtools/webpack'
		},
		{
			test: /\.html$/,
			loader: 'html-loader',
			options: {
				 caseSensitive: true
			}
		}]
	}
};
