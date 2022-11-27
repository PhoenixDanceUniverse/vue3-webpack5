const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // entry: './src/index.js',
	mode: 'development',
	entry: {
    index: {
			import: './src/index.js',
			// dependOn: 'share'
		},
    print: {
			import: './src/print.js',
			// dependOn: 'share'
		},
		// share: 'lodash'
  },
  output: {
//    filename: 'main.js',
    // filename: 'bundle.js',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist'),
		clean: true
  },
	devtool: 'inline-source-map',//开发环境报错代码指向源文件不分割
	devServer: {//开发环境热更新目录
    static: path.resolve(__dirname, '../dist'),
  },
	optimization: {//多入口相同的模块调用集合至一个bundle
    runtimeChunk: 'single',
		splitChunks: {
			chunks: 'all',
		},
  },
	module: {
		rules: [
			{
				test: /\.css$/i,
				use:
				 ['style-loader','css-loader'],
			},
			{//加载图像
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
			{//加载字体
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Development'
		})
	]
};