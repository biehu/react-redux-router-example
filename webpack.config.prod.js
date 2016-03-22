var webpack = require('webpack');
var path = require('path');

module.exports = {
	devtool: 'source-map',
    entry: [
		'./comps/app.js'
	],
    output: {
        path: __dirname,
        filename: 'bundle.js',
		publicPath: '/'
    },
	plugins: [
		new webpack.optimize.OccurrenceOrderPlugin(),
	    new webpack.DefinePlugin({
	      'process.env': {
	        'NODE_ENV': JSON.stringify('production')
	      }
	    }),
		new webpack.optimize.UglifyJsPlugin({
	      compressor: {
	        warnings: false
	      }
	    })
	],
	resolve: {
        extensions: ['', '.js']
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel'],
            exclude: /node_modules/
        }, {
			test: /\.css$/,
			loader: 'style!css'
		}]
    }
};
