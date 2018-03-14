const { resolve } = require('path');

module.exports = {
	context: resolve(__dirname, 'src'),

	entry: ['./js/index.js'],
	output: {
		filename: 'bundle.js',
		// the output bundle

		path: resolve(__dirname, 'dist'),

		publicPath: '/'
		// necessary for HMR to know where to load the hot update chunks
	},

	module: {
		rules: [
			{
				test: /\.jsx?$/,
				use: [ 'babel-loader' ],
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader?modules']
			}
		]
	}
};
