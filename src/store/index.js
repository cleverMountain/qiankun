import { createStore } from 'vuex'
import { initGlobalState, onGlobalStateChange } from 'qiankun';


// 创建一个新的 store 实例
const store = createStore({
  state() {
    return {
      isHeaderShow: true,
      alarmCount: 10
    }
  },
  mutations: {
    changeHeaderState(state, payload) {
      state.isHeaderShow = payload
    },
    changeAlarmCount(state, payload) {

      state.alarmCount = payload
    }
  },
  actions: {

  }
})

const actions = initGlobalState(store.state);
actions.onGlobalStateChange((state, prev) => {
  store.replaceState(state)
});

export default store
