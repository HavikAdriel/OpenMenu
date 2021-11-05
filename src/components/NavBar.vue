<template>
  <van-nav-bar
    :title="title"
    left-text="返回"
    left-arrow
    @click-left="onClickLeft"
  />
</template>
<script>
import {getCurrentInstance} from 'vue'
export default {
  props: ["title", "agoRouterName"],
  setup(props) {
    const { proxy } = getCurrentInstance();
    function onClickLeft() {
        proxy.$router.go(-1);
    }
    return {
      onClickLeft,
      props,
    };
  },
};
</script>