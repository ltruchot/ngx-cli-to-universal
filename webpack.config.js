const ngtools = require('@ngtools/webpack');
const path = require('path');

module.exports = {
	entry: {
		main: './src/main.server.ts'
	},
	resolve: {
		extensions: ['.ts', '.js', '.html', '.css']
	},
	target: 'node',
	output: {
		path: path.resolve(__dirname, 'dist-universal'),
		filename: '[name].js'
	},
	plugins: [
		new ngtools.AotPlugin({
			tsConfigPath: './tsconfig-universal.json'
		})
	],
	module: {
		rules: [
			{
				test: /\.ts$/,
				loader: '@ngtools/webpack'
			},
			{
				test: /\.html$/,
				loader: 'html-loader',
				options: {
					 caseSensitive: true
				}
			},
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ]
			}
		]
	}
};
