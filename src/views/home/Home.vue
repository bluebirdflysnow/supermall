<template>
  <div id="home">
    <!-- 导航栏 -->
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
  
    <scroll class="content" 
            ref="scroll" 
            :probe-type="3" 
            @scrollPosition="scrollPosition"
            :pullUpLoad="true"
            @pullingUp="loadMore">
      <!-- 轮播图 -->
      <home-swiper :banners="banners"/>
      <!-- 推荐 -->
      <recommend-view :recommends="recommends"/>
      <feature-view/>
      <tab-control class="tab-control" :titles="['流行', '新款', '精选']" @tabClick="tabClick"/>
      <goods-list :goods="showGoods"/>
    </scroll>
    <!-- 组件设置点击事件须使用native关键字 -->
    <back-top @click.native="backToTop" v-show="isShowBackTop"/>
  </div>
</template>

<script>

  import HomeSwiper from './childrenComps/HomeSwiper'
  import RecommendView from './childrenComps/RecommendView'
  import FeatureView from './childrenComps/FeatureView'

  import NavBar from 'components/common/navbar/NavBar'
  import TabControl from 'components/content/tabControl/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'
  import Scroll from 'components/common/scroll/Scroll'
  import BackTop from 'components/content/backTop/BackTop'

  import {getHomeMultidata, getHomeGoods} from 'network/home'
  import {debounce} from 'common/utils.js'
  export default {
    name: 'Home',
    components: {
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      GoodsList,
      Scroll,
      BackTop

    },

    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []}
        },
        currentType: 'pop',
        isShowBackTop: false
      };
    },

    computed: {
      showGoods() {
        return this.goods[this.currentType].list
      }
    },
    created() {
      // 1、请求多个数据（轮播图）
      this.getHomeMultidata()

      // 2、请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')

      
    },
    mounted() {
      const refresh = debounce(this.$refs.scroll.refresh, 500);
      // 3、监听item中图片加载完成
      this.$bus.$on('itemImageLoad', () => {
        refresh();
      })
    },
    methods: {
      /**
       * 事件监听相关方法
       */
      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break;
          case 1:
            this.currentType = 'new'
            break;
          case 2:
            this.currentType = 'sell'
            break;
        }
      },

      /* 监听回到顶部的点击事件 */
      backToTop() {
        this.$refs.scroll.scrollTo(0, 0, 500)
      },

      /* 监听滚动的位置，当滚动到一定位置时设置backTop显示或者隐藏 */
      scrollPosition(position) {
        this.isShowBackTop = (-position.y) > 1000;
      },

      /* 上拉加载更多 */
      loadMore() {
        this.getHomeGoods(this.currentType);
      },

      /**
       * 网络请求相关方法
       */
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      },
      
      getHomeGoods(type) {
        const page = this.goods[type].page + 1;
        getHomeGoods(type, page).then(res => {
          // 可变参数
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1;
          this.$refs.scroll.finishPullUp();
        })
      }
    }
  };
</script>

<style scoped>

  #home {
    /* padding-top: 44px; */
    height: 100vh; /* 设置视口高度 */
    position: relative;
  }

  .home-nav {
    background-color: var(--color-tint); /* 设置背景颜色 */
    color: white;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }

  .tab-control {
    position: sticky; /* 设置粘性属性，当滚动条滑动到一定位置，则将元素位置固定 */
    top: 44px;
    background-color: #fff;

    z-index: 9;
  }

  /* .content {
    height: calc(100%-93px);
    margin-top: 51px;
    overflow: hidden;
  } */

  .content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    overflow: hidden;
  }
</style>