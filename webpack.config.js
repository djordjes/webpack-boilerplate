module.exports = {
	entry: './src/js/app.js',
	output: {
		filename: 'bundle.js',
		path: './public',
		publicPath: '/assets/'
	},
	module: {
		loaders: [
			{ test: /\.jsx?$/, exclude: /node_modules/, loaders: ['react-hot', 'babel-loader'] }
		]
	},
	resolve: {
		extensions: ['', '.js', '.jsx'],
		modulesDirectories: ['node_modules']
	}
};
