import { createApp } from "vue";
import App from "./App.vue"
// import store from "./store"
import routes from "./router"
import { createRouter, createWebHashHistory } from "vue-router";
import action from "../../../utils/action"
// import store from "../../../src/store";

if (window.__POWERED_BY_QIANKUN__) {
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

let instance = null;
let $store = {}
function render(props = {}) {

  const { container, store } = props;
  $store = store

  const router = createRouter({
    history: createWebHashHistory(window.__POWERED_BY_QIANKUN__ ? '#/app1' : '/'),
    routes,
  });
  console.log(router)

  instance = createApp(App)
  instance.use(router)
  // instance.use($store)
  instance.mount(container ? container.querySelector('#app1') : '#app1');
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}
export async function mount(props) {
  console.log('[vue] props from main framework', props);
  // action.setActions(props)

  render(props);
}
export async function unmount() {
  console.log(instance.unmount, instance.$destroy)
  instance.unmount();
  instance = null;

}

export { $store }