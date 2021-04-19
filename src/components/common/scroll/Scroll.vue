<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  // 导入 better-scroll
  import BScroll from 'better-scroll'

  export default {
    name: 'Scroll',
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        scroll: null
      };
    },
    mounted() {
      // better-scroll的基本使用，默认情况下不能实时监听滚动的位置
      this.scroll = new BScroll(this.$refs.wrapper, {
        // 默认值是0，表示不侦测。1也是不侦测，2侦测（在手指滚动的过程中侦测）
        // 3(只要是滚动，都进行侦测)
        probeType: this.probeType,
        // 设置内部点击事件可以被监听
        click: true,
        // 上拉加载监听
        pullUpLoad: this.pullUpLoad
      })

      if (this.probeType === 2 || this.probeType === 3) {
        this.scroll.on('scroll', (position) => {
          this.$emit('scrollPosition', position);
        }) 
      }
      
      if (this.pullUpLoad) {
        this.scroll.on('pullingUp', () => {
          this.$emit('pullingUp');
        })
      }
      
    },
    methods: {
      /* 监听回到顶部的点击事件 */
      scrollTo(x, y, time=300) {
        this.scroll && this.scroll.scrollTo(x, y, time);
      },

      finishPullUp() {
        this.scroll && this.scroll.finishPullUp();
      },

      refresh() {
        // console.log('---');
        this.scroll && this.scroll.refresh();
      },

      getScrollY() {
        return this.scroll ? this.scroll.y : 0;
      }
      
    },
  };
</script>

<style scoped>

</style>