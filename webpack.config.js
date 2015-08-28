module.exports = {
    entry: {
        reactIndex: './src/js/app.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: './public',
        publicPath: 'http://localhost:8090/assets'
    },
    module: {
        loaders: [
            {
                test:  /\.jsx?$/,
                loader: 'babel'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        modulesDirectories: ['node_modules']
    }
};