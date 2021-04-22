import {debounce} from 'common/utils.js'
// 混入
export const itemListenerMixin = {
  data() {
    return {
      itemListener: null
    }
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 500);
    // 3、监听item中图片加载完成
    this.itemListener = () => {
      refresh();
    }
    this.$bus.$on('itemImageLoad', this.itemListener);
  }
}