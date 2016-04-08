var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	devtool: 'eval',
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
		'./src/comps/app.js'
	],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'scripts/bundle.js',
		chunkFilename: 'scripts/[chunkhash:8].bundle.js',
		publicPath: '/dist/'
    },
	plugins: [
	    new webpack.HotModuleReplacementPlugin(),
	    new webpack.NoErrorsPlugin(),
		new ExtractTextPlugin('styles/bundle.css', {
			allChunks: true
		})
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
            test: /comps\/(.+?)\.css$/,
            loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]')
        }, {
            test: /statics\/(.+?)\.css$/,
            loader: ExtractTextPlugin.extract('style', 'css')
        }, {
            test: /\.(png|jpg|jpeg|gif)$/,
            loader: 'url-loader?limit=8192&name=image/[hash:8].[name].[ext]'
        }]
    }
};
