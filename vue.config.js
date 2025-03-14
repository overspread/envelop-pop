module.exports = {
    // publicPath的设置见 https://cli.vuejs.org/zh/config/
    publicPath: '/envelop-popup',
      css: {
        loaderOptions: {
          postcss: {
            plugins: [
              require('autoprefixer')({
                // autoprefixer的相关配置...
              }),
              // 其他PostCSS插件...
            ]
          }
        }
      }
  }