const webpack = require('webpack');
const fs = require('fs');
const path = require('path');

const EXAMPLES_DIR = path.resolve(__dirname, 'examples');

function isDirectory(dir) {
  return fs.lstatSync(dir).isDirectory();
}

function buildEntries() {
  return fs.readdirSync(EXAMPLES_DIR).reduce(function (entries, dir) {
    if (dir === 'build') return entries;

    var isDraft = dir.charAt(0) === '_';

    if (!isDraft && isDirectory(path.join(EXAMPLES_DIR, dir)))
      entries[dir] = path.join(EXAMPLES_DIR, dir, 'app.js');

    return entries;
  }, {});
}

module.exports = {
    entry : buildEntries(),
    output : {
        filename : '[name].js',
        chunkFilename : '[id].chunk.js',
        path : path.join(__dirname, 'examples/__build__'),
        publicPath : '/__build__'
    },
    module : {
        loaders : [
            { 
                test : /\.jsx?$/, 
                exclude : /node_modules/, 
                loader : 'babel-loader',
                query : {
                    presets : ['react', 'stage-2']
                }
            },
            {test: /\.scss$/, loader: "style-loader!css-loader!sass-loader"},
            {test: /\.(png|jpg|gif)$/, loader: "url-loader"}
        ]
    },
    plugins : [
        new webpack.optimize.CommonsChunkPlugin('shared')
    ]
};