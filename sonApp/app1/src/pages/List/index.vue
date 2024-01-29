<template>
  <div>
    <span>订单页面</span>
    <p>{{ count }}</p>
    <button @click="modify">改变报警</button>
  </div>
</template>

<script setup>
import {$store} from "../../main"
import { ref } from "vue";
import action from "../../../../../utils/action";


const count = ref($store.state.alarmCount);

const modify = () => {
  count.value += 10;
  $store.commit("changeAlarmCount", count.value);
  // action.setGlobalState({
  //   alarmCount: count.value,

  // });
  console.log($store)
};
</script>