const path = require('path');
function resolve (dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  publicPath: "/",
  outputDir: "dist", // 打包生成的文件夹
  assetsDir: "static", // 打包生成放置静态资源的文件夹
  indexPath: "index.html", // 打包后输出的html名称
  lintOnSave: false, // 是否开启eslint检查
  devServer: { // webpack相关配置
    open: true, // 启动服务，默认打开浏览器
    port: "8000", // 设置端口号
    proxy: {
      '/api': {
        target: 'http://152.136.35.5:8081',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  }
};