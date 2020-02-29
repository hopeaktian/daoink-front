import Vue from 'vue'
import App from './App.vue'
// 1.1 导入VueRouter
import VueRouter from 'vue-router'
// 1.2 安装VueRouter
Vue.use(VueRouter)
// 1.3 导入自己的router.js模块
import router from './router.js'

// 导入font-awesome图标, eg:<i class="fa fa-user"></i>
import 'font-awesome/css/font-awesome.css'

// axios 配置
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.prototype.axios = axios;
Vue.use(VueAxios, axios);

// import Vuex from 'vuex';
// Vue.use(Vuex);
// 设置请求头
// import Axios from "axios"
// Axios.defaults.headers.common['Authentication-Token'] = store.state.token;

Vue.config.productionTip = false

// 引入vant的组件
import { Swipe, SwipeItem } from 'vant';
import { Tabbar, TabbarItem } from 'vant';
import { Divider } from 'vant';
import { Col, Row } from 'vant';
import { Icon } from 'vant';
import { Image } from 'vant';
import { Button } from 'vant';
import { Panel } from 'vant';
import { Cell, CellGroup } from 'vant';
import { Overlay } from 'vant';
import { NavBar } from 'vant';
import { Field } from 'vant';
import { Form } from 'vant';

// 引入Mint-UI组件
import { Toast } from 'mint-ui';
Vue.component(Toast);

// 安装vant组件
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Divider);
Vue.use(Col);
Vue.use(Row);
Vue.use(Icon);
Vue.use(Image);
Vue.use(Button);
Vue.use(Panel);
Vue.use(Cell);  
Vue.use(CellGroup);  
Vue.use(Overlay);  
Vue.use(NavBar);  
Vue.use(Field);  
Vue.use(Form);  



new Vue({
  render: h => h(App),
  router,  // 1.4 挂载路由对象到VM实例上
}).$mount('#app')
