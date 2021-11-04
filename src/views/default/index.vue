<template>
  <div class="container me-default">
    <van-search
      v-model="searchText"
      show-action
      placeholder="请输入菜名/分类/制作方法"
      @search="onSearch"
    >
      <template #action>
        <div @click="onSearch">搜索</div>
      </template>
    </van-search>
    <div class="me-content">
      <div class="me-type">
        <span class="me-filter">筛选：</span>
      </div>
    </div>
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
    const searchText = ref("");
    function onSearch() {}
    return {
      searchText,
      onSearch,
    };
  },
  created() {
    const { proxy } = getCurrentInstance();
    proxy.$axios("./data/type.json").then((res) => {
      console.info(res.data);
    });
  },
};
</script>