var pkg = require('./package.json');
 
 module.exports = {
   resolve: {
     extensions: ['', '.jsx', '.js']
   },
 
   entry:  './app.jsx',
 
   output: {
     path: './build',
     filename: pkg.name + '.js'
   },
 
   module: {
     loaders: [
       {
         test: /(\.js|\.jsx)$/,
         exclude: /node_modules/,
         loader: "babel-loader",
         query: { presets: ['es2015', 'react'] }
       }
     ]
   }
};
