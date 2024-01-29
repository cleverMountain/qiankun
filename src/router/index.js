import { createRouter, createWebHistory, createWebHashHistory } from "vue-router";


const routes = [
  {
    path: "/",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "home" */ "../pages/Login/index.vue"),
  },
  {
    path: "/home",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../pages/Home/index.vue"),
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
console.log(router)
export default router;
