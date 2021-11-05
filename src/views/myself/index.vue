<template>
  <div class="my">
    <div class="user-profile">
      <div class="info">
        <van-image round src="https://img.yzcdn.cn/vant/cat.jpeg" />
        <h4 class="name">
          <p>昵称：</p>
          <p>性别：</p>
        </h4>
      </div>
    </div>
    <van-row class="user-links">
      <van-col span="8">
        <van-icon name="like-o" color="#07c160"/>我的喜欢
      </van-col>
      <van-col span="8">
        <van-icon name="star-o" color="#7af"/>我的收藏
      </van-col>
      <van-col span="8">
        <van-icon name="tosend" color="#fa0"/>阅读历史
      </van-col>
    </van-row>

    <van-cell-group class="user-group">
      <van-cell icon="edit" title="编辑资料" to="/" is-link />
      <van-cell icon="setting-o" title="系统设置" is-link />
      <van-cell icon="warning-o" title="退出登录" to="/" is-link />
    </van-cell-group>
    <Tabbar></Tabbar>
  </div>
</template>
<script>
import "./index.scss"
import Tabbar from "@/components/Tabbar.vue";
import {ref} from "vue"
export default {
    components:{
        Tabbar
    },
    setup(){
        const nickName=ref('以安');
        const artCount=ref(10);
        const followCount=ref(5);
        const fansCount=ref(40);
        return{
            nickName,artCount,followCount,fansCount
        }
    }
}
</script>