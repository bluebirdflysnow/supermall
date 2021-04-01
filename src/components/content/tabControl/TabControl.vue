<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles" :key="item.index" class="tab-control-item" :class="{active: index === currentIndex}"
        @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
  name: 'TabControl',
  props: {
    titles: {
      type: Array,
      defualt() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  mounted() {
    
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      // 将点击传给父组件
      this.$emit('tabClick', index);
    }
  }
  };
</script>

<style scoped>
  .tab-control {
    display: flex;
    text-align: center;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
  }

  .tab-control .tab-control-item {
    flex: 1;
  } 

  .active {
    color: var(--color-high-text); 
  }

  .tab-control-item span {
    padding: 5px;
  }

  .active span {
    border-bottom: 2px solid var(--color-tint);
  }
</style>