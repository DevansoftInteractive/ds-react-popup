const path = require('path');

module.exports = {
    entry : ["babel-polyfill", path.join(__dirname, './src/index.js')],
    output : {
        filename : 'index.js',
        path : path.join(__dirname, './lib'),
        library : 'ds-react-popup',
        libraryTarget : 'umd'
    },
    module : {
        loaders : [
            { 
                test : /\.(js|jsx)$/, 
                exclude : /node_modules/,
                use: [
                    {
                        loader : 'babel-loader',
                        query : {
                            presets : ['react', 'stage-2']
                        }
                    }
                ]
            },
            {test: /\.scss$/, loader: "style-loader!css-loader!sass-loader"},
            {test: /\.(png|jpg|gif)$/, loader: "url-loader"}
        ]
    },
    plugins : [
    ]
};