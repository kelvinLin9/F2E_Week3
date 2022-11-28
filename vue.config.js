// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,
//   // assetsDir: 'static', // 處理音檔問題
//   // 修正檔案命名問題
//   lintOnSave: false,
//   publicPath: process.env.NODE_ENV === 'production' ? '/F2E_Week3/' : '/'
// })

module.exports = {
  chainWebpack: config => {
    config
      .module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.transformAssetUrls = {
          audio: 'src'
        }
        return options
      })
  }
}
