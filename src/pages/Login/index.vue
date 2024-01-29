<template>
  <div class="login">
   <div>
     <div class="item">
      <span class="lr">账号:</span>
      <input>
    </div>
      <div class="item">
      <span class="lr">密码:</span>
      <input>
    </div >
     <button class="item ll" @click="login">登录</button>
   </div>
  </div>
 
</template>

<script setup>
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const store = useStore()
const router = useRouter();
const login = () => {
  store.commit('changeHeaderState', true)
  router.push('/app1')
}
</script>

<style lang="less">
.login {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .item {
    margin-top: 20px;
    .lr {
      margin-right: 12px;
    }
  }
  .ll {
    margin-left: 80px;
    width: 60px;
  }
}
</style>