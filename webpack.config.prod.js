var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	devtool: 'source-map',
    entry: [
		'./src/comps/app.js'
	],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'scripts/bundle.js',
		publicPath: '/dist/'
    },
	plugins: [
		new ExtractTextPlugin('styles/bundle.css', {
			allChunks: true
		}),
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
            test: /comps\/(.+?)\.css$/,
            loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]')
        }, {
            test: /statics\/(.+?)\.css$/,
            loader: ExtractTextPlugin.extract('style', 'css')
        }, {
            test: /\.(png|jpg|jpeg|gif)$/,
            loader: 'url-loader?limit=8192'
        }]
    }
};
