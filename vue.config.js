module.exports = {
  configureWebpack: {
    resolve: {
      extensions: [],
      // 起别名
      alias: {
        'common': '@/common',
        'componets': '@/componets',
        'network': '@/network',
        'views': '@/views'
      }
    }
  }
}