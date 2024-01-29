<template>
  <div class="home">


  </div>
</template>

<script setup>
import Header from "../../components/Header.vue"
import { useRouter } from "vue-router";
const router = useRouter();
const goto = () => {
  router.push('/app1')
}
</script>

<style lang="less" scoped>
.home {
  height: 100%;

  .header {
    display: flex;
    height: 40px;
    align-items: center;
    background: blanchedalmond;
  }
  .content {
   height: calc(100% - 40px);
  }
}
</style>
