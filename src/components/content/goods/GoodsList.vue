<template>
  <div class="goods">
    <goods-list-item v-for="item in goods" :key="item.index" :goods-item="item"/>
  </div>
</template>

<script>
  import GoodsListItem from './GoodsListItem'

  export default {
  components: { GoodsListItem },
    name: 'GoodsList',
    props: {
      goods: {
        type: Array,
        defualt() {
          return []
        }
      }
    },
    components: {
      GoodsListItem
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
  .goods {
    display: flex;
    flex-wrap: wrap; /* 设置换行 */
    justify-content: space-around; /* 子项在侧轴平分剩余空间 */
    padding: 2px;
  }
</style>