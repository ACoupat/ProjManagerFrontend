// vue.config.js
module.exports = {
    chainWebpack: config => {
        config.module
          .rule('html')
          .test(/\.html$/)
          .use('html-loader')
          .loader('html-loader')
      },
      runtimeCompiler: true
    
}