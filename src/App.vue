<script setup>
import { useStore } from "vuex";

const store = useStore();
</script>

<template>
  <div class="container">
    <div>{{ store.isHeaderShow }}</div>
    <div class="header" v-if="store.state.isHeaderShow">
      <div @click="goto">应用1</div>
      <div style="margin: 0 20px">应用2</div>
      <div style="color: red">{{ store.state.alarmCount }}</div>
    </div>
    <router-view></router-view>
    <div id="sub-app"></div>
  </div>
</template>


<style lang="less" scoped>
.container {
  height: 100%;
  box-sizing: border-box;
  .header {
    height: 40px;
    display: flex;
    background: #8a2be236;
    align-items: center;
  }
}
</style>