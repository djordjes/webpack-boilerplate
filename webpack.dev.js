const {resolve} = require('path');
const webpack = require('webpack');
const merge   = require('webpack-merge');
const common  = require('./webpack.common.js');

module.exports = merge(common, {
	entry: [
		'webpack-dev-server/client?http://localhost:3000',
		// bundle the client for webpack-dev-server
		// and connect to the provided endpoint

		'webpack/hot/only-dev-server'
		// bundle the client for hot reloading
		// only- means to only hot reload for successful updates
	],
	
	devtool: 'inline-source-map',

	devServer: {
		hot: true,
		// enable HMR on the server

		port: 3000,

		contentBase: resolve(__dirname, 'dist'),
		// match the output path

		publicPath: '/',
		// match the output `publicPath`

		historyApiFallback: true
		// refresh page get route
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		// enable HMR globally

		new webpack.NamedModulesPlugin()
		// prints more readable module names in the browser console on HMR updates
	]

});
