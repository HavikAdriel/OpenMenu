<template>
  <div class="container me-searchPage">
    <NavBar title="搜索" />
    <van-search v-model="searchText" show-action placeholder="搜索亿万免费菜谱">
      <template #action>
        <div @click="onSearch">搜索</div>
      </template>
    </van-search>
    <div class="me-history">
      <van-tag
        closeable
        size="medium"
        color="gray"
        @close="close"
        plain round 
        v-for="item in 8"
        :key="item"
        style="margin:4px"
      >
        标签{{item}}
      </van-tag>
    </div>
    <div class="me-gutess-search">
      <van-list
        v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多了"
      >
        <van-swipe-cell v-for="item in 5" :key="item" :title="item">
          <van-card
            price="2.00"
            desc="制作方法"
            title="菜名"
            class="goods-card"
            thumb="https://img.yzcdn.cn/vant/cat.jpeg"
          />
          <template #right>
            <van-button square text="收藏" type="primary" />
            <van-button square text="喜欢" type="success" />
          </template>
        </van-swipe-cell>
      </van-list>
    </div>
  </div>
</template>
<script>
import "./index.scss";
import { ref } from "vue";
import NavBar from "@/components/NavBar";
export default {
  components: {
    NavBar,
  },
  setup() {
    const searchText = ref("");
    const loading = ref(false);
    const finished = ref(false);
    return {
      searchText,
      loading,
      finished,
    };
  },
};
</script>