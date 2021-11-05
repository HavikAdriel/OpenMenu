<template>
  <div class="my">
    <div class="user-profile">
      <div class="info">
        <van-image radius="5px" src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <h4 class="name">
          <p>昵称：</p>
          <p>性别：</p>
        </h4>
      </div>
    </div>
    <van-row class="user-links">
      <van-col span="8">
        <van-icon name="like-o" @click="toList(0)" color="#07c160" />我的喜欢
      </van-col>
      <van-col span="8">
        <van-icon name="star-o" @click="toList(0)" color="#7af" />我的收藏
      </van-col>
      <van-col span="8">
        <van-icon name="records" @click="toList(0)" color="#fa0" />我的发布
      </van-col>
    </van-row>

    <van-cell-group class="user-group">
      <van-cell icon="edit" title="编辑资料" to="/" is-link />
      <van-cell icon="setting-o" title="系统设置" is-link />
      <van-cell icon="chat-o" title="最新消息" is-link />
      <van-cell icon="warning-o" title="退出登录" to="/" is-link />
    </van-cell-group>
    <Tabbar></Tabbar>
  </div>
</template>
<script>
import "./index.scss";
import Tabbar from "@/components/Tabbar.vue";
import { ref, getCurrentInstance } from "vue";
export default {
  components: {
    Tabbar,
  },
  setup() {
    const nickName = ref("以安");
    const artCount = ref(10);
    const followCount = ref(5);
    const fansCount = ref(40);
    const { proxy } = getCurrentInstance();
    function toList(index) {
      proxy.$router.push({
        path: "/list",
        params: {
          index: index,
        },
      });
    }
    return {
      nickName,
      artCount,
      followCount,
      fansCount,
      toList,
    };
  },
};
</script>