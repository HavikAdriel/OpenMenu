<template>
  <div class="me-typeFilter">
    <van-search v-model="searchText" show-action placeholder="搜索亿万免费菜谱">
      <template #action>
        <div @click="onSearch">搜索</div>
      </template>
    </van-search>
    <van-row>
      <van-col span="4">
        <van-sidebar v-model="active">
          <van-sidebar-item
            v-for="item in typeList"
            :title="item.name"
            :key="item"
          />
        </van-sidebar>
      </van-col>
      <van-col span="20">
        <van-list
          v-model:loading="loading"
          :finished="finished"
          finished-text="没有更多了"
        >
          <van-card
            v-for="item in 10"
            :key="item"
            :title="item"
            price="2.00"
            desc="制作方法"
            class="goods-card"
            thumb="https://img.yzcdn.cn/vant/cat.jpeg"
          >
            <template #footer>
              <van-button type="primary" icon="star-o" size="small"/>
              <van-button type="success" icon="like-o" size="small"/>
            </template>
          </van-card></van-list
        ></van-col
      >
    </van-row>
    <Tabbar></Tabbar>
  </div>
</template>
<script>
import "./index.scss";
import { ref, getCurrentInstance } from "vue";
import Tabbar from "@/components/Tabbar.vue";
export default {
  components: {
    Tabbar,
  },
  setup() {
    const active = ref("");
    const searchText = ref("");
    const typeList = ref([]);
    const loading = ref(false);
    const finished = ref(false);
    function onSearch() {}
    return {
      active,
      searchText,
      onSearch,
      typeList,
      loading,
      finished,
    };
  },
  created() {
    const { proxy } = getCurrentInstance();
    proxy.$axios("./data/type.json").then((res) => {
      proxy.typeList = res.data;
    });
  },
};
</script>