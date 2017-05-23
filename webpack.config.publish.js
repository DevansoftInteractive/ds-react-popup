const webpack = require('webpack');
const fs = require('fs');
const path = require('path');

module.exports = {
    entry : path.join(__dirname, 'src/index.js'),
    output : {
        filename : 'index.js',
        path : path.join(__dirname, 'lib'),
    },
    module : {
        loaders : [
            { 
                test : /\.js$/, 
                exclude : /node_modules/, 
                loader : 'babel-loader',
                query : {
                    presets : ['react']
                }
            },
            {test: /\.scss$/, loader: "style-loader!css-loader!sass-loader"},
            {test: /\.(png|jpg|gif)$/, loader: "url-loader"}
        ]
    },
    plugins : [
    ]
};