## qiankun概括
### 主应用
1. qiankun分为主应用和微应用
2. 首先在主应用注册微应用，如果主应用的url改变，qiankun回去监听路由变化，然后去匹配注册的微应用，到匹配到后微应用会被插入到你指定的容器中

### 微应用
1. 微应用的入口处会暴露三个钩子函数bootstrap,mount,unmount并且可以在mount中拿到prop并进行渲染微应用


### 主应用和微应用的通信方式
1. qianun提供了initGlobalState，onGlobalStateChange，setGlobalState，offGlobalStateChange这几个函数
2. 首先在主应用初始化initGlobalState数据
3. 如果需要修改数据时使用setGlobalState修改数据
4. 通过onGlobalStateChange去监听全局数据的改变