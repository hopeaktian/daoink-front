<template>
  <div id="app">
    <!-- 中间vue-router部分 -->
    <router-view></router-view>

    <!-- 底部 -->
    <van-tabbar route>
      <van-tabbar-item replace to="/" icon="wap-home" van-tabbar-item--active>首页</van-tabbar-item>
      <van-tabbar-item replace to="/doc" icon="column" dot>资料库</van-tabbar-item>
      <van-tabbar-item replace to="/order" icon="cart" info="5">订单</van-tabbar-item>
      <van-tabbar-item replace to="/mine" icon="manager" info="20">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import store from "./store";

export default {
  created() {
    if (localStorage.getItem("token")) {
      store.commit("set_token", localStorage.getItem("token"));
      store.commit("set_userinfo", {
        username: localStorage.getItem("username"),
        user_id: localStorage.getItem("user_id")
      });
    }
  }
};
</script>

<style>
body {
  background-color: #f7f8fa;
}

.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
}
</style>
