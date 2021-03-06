module.exports = {
  // 指定`build`时,在静态文件上一层添加static目录
  assetsDir: 'static',
  outputDir: 'docs',
  // 生产环境和开发环境设置不同的publicPath, 生产环境使用相对路径，开发使用绝对路径
  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : ''
};

// gzip 压缩
const CompressionPlugin = require('compression-webpack-plugin')

configureWebpack: config => {
  if (process.env.NODE_ENV === 'production') {
    return {
      plugins: [
        new CompressionPlugin({
          algorithm: 'gzip',
          test: /\.(js|css)$/,// 匹配文件名
          threshold: 10240, // 对超过10k的数据压缩
          deleteOriginalAssets: false, // 不删除源文件
          minRatio: 0.8 // 压缩比
        })
      ]
    }
  }
}