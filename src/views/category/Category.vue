<template>
  <div class="wrapper" ref="wrapper">
    <ul class="content">
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
      <li>分类列表</li>
    </ul>
  </div>
</template>

<script>

  // 导入better-scroll
  import BScroll from 'better-scroll'

  export default {
    name: 'Category',
    data() {
      return {
        scroll: null
      };
    },
    created() {
      
    },
    mounted() {
      // better-scroll的基本使用，默认情况下不能实时监听滚动的位置
      this.scroll = new BScroll(this.$refs.wrapper, {
        // 默认值是0，表示不侦测。1也是不侦测，2侦测（在手指滚动的过程中侦测）
        // 3(只要是滚动，都进行侦测)
        probeType: 2,
        // 设置内部点击事件可以被监听
        click: true,
        // 上拉加载监听
        pullUpLoad: true
      })

      this.scroll.on('scroll', (position) => {
        // console.log(position);
      }) 

      this.scroll.on('pullingUp', () => {
        console.log('上拉加载更多');
        // 设置可以再次上拉加载更多
        this.scroll.finishPullUp()
      })
    },
    methods: {
      
    }
  };
</script>

<style scoped>
  .wrapper {
    height: 150px;
    background-color: red;
    overflow: hidden;
  }

</style>