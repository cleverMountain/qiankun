import { createApp } from "vue";
import App from "./App.vue"
import { registerMicroApps, start, initGlobalState  } from 'qiankun';
import store from "./store";
import router from "./router"
import microApp from "../microApp"


registerMicroApps(microApp);


start();
const app = createApp(App)

app.use(store).use(router).mount('#app')
