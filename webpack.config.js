const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
    stats: {
        optimizationBailout: true
    },
    mode: "production",
    entry: {
        gsap: "./src/gsap.js",
        gsapAll: "./src/gsapAll.js",
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new BundleAnalyzerPlugin({
            generateStatsFile: true,
            analyzerMode: "static"
        }),
        new CleanWebpackPlugin("[dist]"),
        new UglifyJsPlugin({
            sourceMap: true
        })
    ],
    performance: {
        hints: false,
    }
};