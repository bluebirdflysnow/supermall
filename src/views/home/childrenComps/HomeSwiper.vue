<template>
  <!-- 轮播图 -->
  <swiper>
    <swiper-item v-for="item in banners" :key="item.index">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper' // 导入轮播图

  export default {
    name: 'HomeSwiper',
    props: {
      banners: {
        type: Array,
        defualt() {
          return []
        }
      }
    },
    components: {
      Swiper,
      SwiperItem
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

<style lang="scss" scoped>

</style>