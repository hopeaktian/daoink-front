<template>
  <div>
    <!-- 顶部轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item><img class="swipe" src="../../assets/slider-1.png"></van-swipe-item>
      <van-swipe-item><img class="swipe" src="../../assets/slider-2.png"></van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
</script>

<style scoped>
.swipe{
  width: 100%;
}
</style>