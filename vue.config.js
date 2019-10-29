module.exports = {
  // publicPath: process.env.NODE_ENV === 'production' ? '/blog/' : '/'
  productionSourceMap: false,
  chainWebpack (config) {
    const cdn = {
      js: [
        '//cdn.jsdelivr.net/npm/jquery@3.4.1/dist/jquery.min.js',
        '//cdn.jsdelivr.net/npm/jquery-backstretch@2.1.17/jquery.backstretch.min.js'
      ],
      css: [
        '//at.alicdn.com/t/font_1464309_8t0ymurobyr.css'
      ]
    }
    config.plugin('html').tap(args => {
      args[0].cdn = cdn
      return args
    })
  }
}
