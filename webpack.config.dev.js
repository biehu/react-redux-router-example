var webpack = require('webpack');
var path = require('path');

module.exports = {
	devtool: 'eval',
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
		'./comps/app.js'
	],
    output: {
        path: __dirname,
        filename: 'bundle.js',
		publicPath: '/'
    },
	plugins: [
	    new webpack.HotModuleReplacementPlugin(),
	    new webpack.NoErrorsPlugin()
	],
	resolve: {
        extensions: ['', '.js']
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['react-hot', 'babel'],
            exclude: /node_modules/
        }, {
			test: /\.css$/,
			loader: 'style!css'
		}]
    }
};
