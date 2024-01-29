<template>
  <div>
    <p>应用1app</p>
    <button @click="goto">订单</button>
  </div>
  
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const goto = () => {
  router.push('/list')
}
</script>
