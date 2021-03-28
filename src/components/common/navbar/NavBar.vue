<template>
  <div class="nav-bar">
    <!-- 左边 -->
    <div class="left">
      <slot name="left"></slot>
    </div>
    <!-- 中间 -->
    <div class="center">
      <slot name="center"></slot>
    </div>
    <!-- 右边 -->
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NavBar',
    data() {
      return {
        
      };
    },
    mounted() {
      
    },
    methods: {
      
    }
  };
</script>

<style scoped>
  .nav-bar {
    display: flex;
    line-height: 44px;
    height: 44px;
    text-align: center;
    box-shadow: 0 1px 1px rgb(100, 100, 100, 0.1);  /* 阴影 */
  }

  .left, .right {
    width: 60px;
    /* background: #000; */
  }

  .center {
    flex: 1;
    /* background: rgb(190, 123, 123); */
  }
</style>