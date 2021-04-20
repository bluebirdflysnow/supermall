<template>
  <div class="detail-swiper">
    <swiper class="my-swiper">
      <swiper-item v-for="item in topImages" :key="item.index">
        <img :src="item" alt="" srcset="" @load="imageLoad">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>

  import {Swiper, SwiperItem} from 'components/common/swiper'

  export default {
    name: 'VuelearnDetailswiper',
    props: {
      topImages: {
        type: Array,
        default() {
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
      imageLoad() {
        // 事件总线，发射事件
        this.$bus.$emit('itemImageLoad');
      }
    },
  };
</script>

<style scoped>
  .my-swiper {
    height: 300px;
    overflow: hidden;
  }
</style>