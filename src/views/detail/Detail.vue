<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav"/>
    <scroll class="s-content"
            ref="scroll" 
            :probe-type="3" 
            :pullUpLoad="true">
      <detail-swiper :top-images="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-goods-info :detail-info="detailInfo"/>
      <detail-params-info :param-info="paramInfo"/>
    </scroll>
    
  </div>
</template>

<script>

  import DetailNavBar from './childComps/DetailNavBar'
  import DetailSwiper from './childComps/DetailSwiper'
  import DetailBaseInfo from './childComps/DetailBaseInfo'
  import DetailShopInfo from './childComps/DetailShopInfo'
  import DetailGoodsInfo from './childComps/DetailGoodsInfo'
  import DetailParamsInfo from './childComps/DetailParamsInfo'

  import Scroll from 'components/common/scroll/Scroll'
  
  import {getDetails, Goods, Shop} from 'network/detail'
  import {debounce} from 'common/utils.js'
  
  export default {
    name: 'Detail',
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamsInfo,
      Scroll
    },
    data() {
      return {
        iid: null,
        topImages: [],
        goods: {},
        shop: {},
        detailInfo: {},
        paramInfo: {}
    };
    },

    created() {
      // 1、保存传入的iid
      this.iid = this.$route.params.iid;

      // 2、根据传入的iid请求详情数据
      getDetails(this.iid).then(res => {
        // console.log(res);
        const data = res.result;
        // 1、获取顶部的轮播图数据
        this.topImages = data.itemInfo.topImages;

        // 2、获取商品信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
      
        // 3、获取店铺信息
        this.shop = new Shop(data.shopInfo)

        // 4、保存商品详情信息
        this.detailInfo = data.detailInfo;

        // 5、获取商品参数信息
        this.paramInfo = data.itemParams;
      })

    },

    mounted() {
      const refresh = debounce(this.$refs.scroll.refresh, 500);
      // 3、监听item中图片加载完成
      this.$bus.$on('itemImageLoad', () => {
        refresh();
      })
    },
    methods: {
      
    }
  };
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;  /* 设置高度为视图高度 */
  }

  .detail-nav {
    position: fixed;
    width: 100%;
    z-index: 9;
    background-color: #fff;
  }

  .s-content {
    /* height: calc(100% - 44px);  */
    position: absolute;
    top: 44px;
    bottom: 0px;
    overflow: hidden;
  }

  
</style>