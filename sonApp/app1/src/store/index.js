import { createStore } from 'vuex'


const token = localStorage.getItem('token')
// 创建一个新的 store 实例
const store = createStore({
  state: {
    a: 1
  }

})



export default store
