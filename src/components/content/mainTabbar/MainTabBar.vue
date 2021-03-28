<template>
  <!-- 引入Tabbar组件 -->
  <tab-bar>
    <tab-bar-item path="/home" activeColor="blue">
      <img slot="itemIcon" src="~/assets/img/tabbar/home.svg" alt="">
      <img slot="itemIconActive" src="../assets/img/tabbar/home_active.svg" alt="">
      <div slot="itemText">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img slot="itemIcon" src="~/assets/img/tabbar/categories.svg" alt="">
      <img slot="itemIconActive" src="~/assets/img/tabbar/categories_active.svg" alt="">
      <div slot="itemText">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img slot="itemIcon" src="~/assets/img/tabbar/cart.svg" alt="">
      <img slot="itemIconActive" src="~/assets/img/tabbar/cart_active.svg" alt="">
      <div slot="itemText">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="itemIcon" src="~/assets/img/tabbar/profile.svg" alt="">
      <img slot="itemIconActive" src="~/assets/img/tabbar/profile_active.svg" alt="">
      <div slot="itemText">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
    // 引入TabBar
  import TabBar from '@/components/tabbar/TabBar';
  // 引入TabBarItem
  import TabBarItem from '@/components/tabbar/TabBarItem';
  export default {
    name: 'MainTabBar',
    //注册组件
    components: {
      TabBar,
      TabBarItem
    },
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

</style>