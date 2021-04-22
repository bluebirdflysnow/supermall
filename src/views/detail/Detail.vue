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
      <detail-comment-info :comment-info="commentInfo"/>
      <goods-list :goods="recommends"/>
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
  import DetailCommentInfo from './childComps/DetailCommentInfo'

  import Scroll from 'components/common/scroll/Scroll'
  import GoodsList from 'components/content/goods/GoodsList'

  import {getDetails, getRecommend, Goods, Shop} from 'network/detail'
  import {itemListenerMixin} from 'common/mixin.js'
  
  export default {
    name: 'Detail',
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamsInfo,
      DetailCommentInfo,
      Scroll,
      GoodsList
    },
    data() {
      return {
        iid: null,
        topImages: [],
        goods: {},
        shop: {},
        detailInfo: {},
        paramInfo: {},
        commentInfo: {},
        recommends: []
      }
    },
    mixins: [itemListenerMixin],
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

        // 6、取出评论信息
        if (data.rate.cRate != 0) {
          this.commentInfo = data.rate.list[0];
        }
      })

      // 3、请求推荐数据
      getRecommend().then(res => {
        this.recommends = res.data.list;
      })
    },

    mounted() {
      
    },
    destroyed() {
      this.$bus.$off('itemImageLoad', this.itemListener);
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