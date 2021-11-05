<template>
  <div>
    <NavBar title="" />
    <van-tabs v-model:active="activeName">
      <van-tab title="我的喜欢" name="a">我的喜欢</van-tab>
      <van-tab title="我的收藏" name="b">我的收藏</van-tab>
      <van-tab title="我的发布" name="c">我的发布</van-tab>
    </van-tabs>
  </div>
</template>
<script>
import { ref } from "vue";
import NavBar from "@/components/NavBar";
export default {
  components: {
    NavBar,
  },
  setup() {
    const activeName = ref("a");
    return { activeName };
  },
};
</script>