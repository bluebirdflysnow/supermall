<template>
  <div>
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="../../../assets/img/common/back.svg" alt="" srcset="">
      </div>
      <div class="title" slot="center">
        <div v-for="(item, index) in titles" 
            class="title-item" 
            :key="index"
            :class="{active: currentIndex===index}"
            @click="titleClick(index)">{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>

  import NavBar from 'components/common/navbar/NavBar'

  export default {
    name: 'VuelearnDetailnavbar',
    components: { 
      NavBar
    },
    data() {
      return {
        titles: ['商品', '参数', '评论', '推荐'],
        currentIndex: 0
      };
    },
    mounted() {
      
    },
    methods: {
      titleClick(index) {
        this.currentIndex = index;
      },

      backClick() {
        this.$router.back();
      }
    },
  };
</script>

<style scoped>
  .title {
    display: flex;
  }

  .title-item {
    flex: 1;
    font-size: 13px;
  }

  .active {
    color: var(--color-high-text);
  }

  .back img{
    margin-top: 12px;
  }
</style>