import store from "./src/store/index.js"

export default  [
  {
    name: 'app1',
    entry: 'http://localhost:9001',
    container: '#sub-app',
    activeRule: '#/app1',
    props: {
      store
    }
  },
]