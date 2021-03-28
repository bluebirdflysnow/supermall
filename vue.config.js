module.exports = {
  configureWebpack: {
    resolve: {
      extensions: [],
      // 起别名
      alias: {
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
        'assets': '@/assets:'
      }
    }
  }
}