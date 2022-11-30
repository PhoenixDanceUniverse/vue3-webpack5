
//@author: Huge_Kl 同微信号, github: PhoenixDanceUniverse 
//注释清晰，最终解释权归属Huge_Kl,欢迎共同探讨
//前言：为什么选择webpack5+vue3,在技术选型时考虑过vite,但是了解到vite只是在开发环境提高了编译速度，正式环境仍然是传统打包
//所以正式环境的打包完全与webpack没有太多差别，只不过优化了开发环境热更新体验，我觉得对于日常开发来讲不差那么几秒时间
//而webpack更成熟，配置项更全面，更有利于项目的深入优化
//总结：vite对于vue项目上手即用，适合不需要对代码分离打包、懒加载、bundle优化等等配置更深入的项目。而webpack入门门槛更高，但适合更长远的优化大型项目
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader')

const { VantResolver } = require('unplugin-vue-components/resolvers');//vant按需引入
const ComponentsPlugin = require('unplugin-vue-components/webpack');

module.exports = {
	// entry: './src/index.js',
	mode: 'development',
	entry: {
		// app: {
		// 	import: './App.vue'
		// },
		index: {//dependOn配置是将特定模块抽成一个bundle独立文件，
			import: './main.js',
			// dependOn: 'share'
		},
		// print: {
		// 	import: './src/print.js',
		// 	// dependOn: 'share'
		// },
		// share: 'lodash' 
	},
	resolve: {  //配置模块如会解析
		extensions: ['.vue', '.tsx', '.ts', '.js', '.json'],//引入这些文件 可以不带后缀 按顺序解析
		alias: {
			'@': path.resolve(__dirname, '../src'), //@方式引入资源
		}
	},
	output: {
		//    filename: 'main.js',//单入口配置方式
		// filename: 'bundle.js',
		filename: '[name]_[contenthash].bundle.js',//多入口配置方式[name]为占位符，表示entry名称[contenthash]生成独有hash,标志文件利于版本更新客户端缓存不替换，高并发场景优化
		path: path.resolve(__dirname, '../dist'),
		clean: true
	},
	devtool: 'inline-source-map',//开发环境报错代码指向源文件，利于开发环境寻找错误代码具体位置（此配置是便宜速度最慢的配置，详细配置查询官方文档devtool）
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
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			// 它会应用到普通的 `.js` 文件
			// 以及 `.vue` 文件中的 `<script>` 块
			// {
			// 	test: /\.js$/,
			// 	loader: 'babel-loader',
			// 	exclude: /node_modules/,
			// },
			{
				test: /\.tsx?$/,
				// exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							[
								"@babel/preset-env",
								{
									targets: {
										browsers: ["ie>=8", "chrome>=62"],
										node: "8.9.0",
									},
									debug: false,
									useBuiltIns: "usage",
									corejs: "3.0",
								},
							],
							[
								"@babel/preset-typescript",
								{
									allExtensions: true, // 支持所有文件扩展名，否则在vue文件中使用ts会报错
								},
							],
						],
						plugins: [
							[
								"@babel/plugin-transform-runtime",
								{
									corejs: 3,
								},
							],
						],
					},
				},
			},
			{
				test: /\.m?js$/,
				include: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
					},
				},
			},
			{//css loader顺序不能错，因为是链式调用，调用先后出错影响最终结果
				test: /\.css$/i,
				use:
					['vue-style-loader', 'css-loader'],
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
			title: 'Development',
			template: path.resolve(__dirname, '../public/index.html'),
			favicon: path.resolve(__dirname, '../public/favicon.ico')
		}),
		new VueLoaderPlugin(),
		// ComponentsPlugin({
    //   resolvers: [VantResolver()],
    // }),
	]
};