const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
 
module.exports = {
   entry: "./src/app.js",
   output: {
       path: path.resolve(__dirname, "dist"),
       filename: "bundle.js"
   },
   module: {
       rules: [
           {
               test: /\.css$/,
               use: [
                   {
                       loader: "style-loader"
                   },
                   {
                       loader: "css-loader"
                   }
               ]
           }
       ]
   },
   plugins: [
       new HtmlWebpackPlugin({
           template: "./src/index.html",
           filename: "index.html"
       }),
       new HtmlWebpackPlugin({
           template: "./src/nav.html",
           filename: "nav.html"
       }),
       new HtmlWebpackPlugin({
           template: "./src/pages/favorites.html",
           filename: "favorites.html"
       }),
       new HtmlWebpackPlugin({
           template: "./src/pages/standings.html",
           filename: "standings.html"
       }),
       new HtmlWebpackPlugin({
           template: "./src/pages/teams.html",
           filename: "teams.html"
       })
   ]
}