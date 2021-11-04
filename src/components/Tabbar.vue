<template>
  <div class="me-footer">
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="cluster-o">好友</van-tabbar-item>
      <van-tabbar-item icon="comment-o">消息</van-tabbar-item>
      <van-tabbar-item icon="manager-o">个人</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    const active = ref(0);
    return {
      title: "",
      active,
    };
  },
};
</script>
<style lang="scss">
</style>