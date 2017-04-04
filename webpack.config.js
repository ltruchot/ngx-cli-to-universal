const ngtools = require('@ngtools/webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

// workaround https://github.com/angular/angular-cli/issues/5329
var aotPlugin = new ngtools.AotPlugin({
	tsConfigPath: './tsconfig-universal.json'
});
aotPlugin._compilerHost._resolve = function(path_to_resolve) {
    path_1 = require("path");
    path_to_resolve = aotPlugin._compilerHost._normalizePath(path_to_resolve);
    if (path_to_resolve[0] == '.') {
        return aotPlugin._compilerHost._normalizePath(path_1.join(aotPlugin._compilerHost.getCurrentDirectory(), path_to_resolve));
    }
    else if (path_to_resolve[0] == '/' || path_to_resolve.match(/^\w:\//)) {
        return path_to_resolve;
    }
    else {
        return aotPlugin._compilerHost._normalizePath(path_1.join(aotPlugin._compilerHost._basePath, path_to_resolve));
    }
};

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
		aotPlugin,
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

