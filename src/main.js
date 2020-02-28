import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 引入vant的组件
import { Swipe, SwipeItem } from 'vant';
import { Tabbar, TabbarItem } from 'vant';
// 使用组件
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Tabbar);
Vue.use(TabbarItem);


new Vue({
  render: h => h(App),
}).$mount('#app')
