const path = require('path');

const config = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{ // applies babel loader to files that ends with .js 
				use: 'babel-loader',
				test: /\.js$/
			},
			{
				use: ['style-loader', 'css-loader'],
				test: /\.css$/
			}
		]
	}
};

module.exports = config
