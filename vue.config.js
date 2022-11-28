const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // assetsDir: 'static', // 處理音檔問題
  // 修正檔案命名問題
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === 'production' ? '/F2E_Week3/' : '/'
})
