<template>
  <div id="home">
    <!-- 导航栏 -->
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <!-- 轮播图 -->
    <home-swiper :banners="banners"/>
    <!-- 推荐 -->
    <recommend-view :recommends="recommends"/>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import HomeSwiper from './childrenComps/HomeSwiper'
  import RecommendView from './childrenComps/RecommendView'
  import {getHomeMultidata} from 'network/home'

  export default {
    name: 'Home',
    components: {
      NavBar,
      HomeSwiper,
      RecommendView
    },

    data() {
      return {
        banners: [],
        recommends: []
      };
    },

    created() {
      // 1、请求多个数据（轮播图）
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    },

    mounted() {
      
    },
    methods: {
      
    }
  };
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint); /* 设置背景颜色 */
    color: white;
  }
</style>