<template>
  <div class="container me-default">
    <van-search
      v-model="searchText"
      show-action
      placeholder="搜索亿万免费菜谱"
      @click-input="clickInput"
    >
      <template #action>
        <van-popover
          v-model:show="showPopover"
          :actions="actions"
          placement="left-start"
          @select="onSelect"
        >
          <template #reference>
            <van-icon name="plus" size="20" />
          </template>
        </van-popover>
      </template>
    </van-search>
    <div class="me-content">
      <div class="me-hot">
        <h5>今日热门</h5>
        <van-swipe
          @change="onChange"
          :width="290"
          style="height: 300px"
          lazy-render
        >
          <van-swipe-item v-for="(item, index) in 4" :key="index">
            <van-image
              class="me-image"
              radius="16px"
              width="280px"
              height="300px"
              src="https://st-cn.meishij.net/p2/20191219/20191219141807_563.jpg"
            />
            <div class="m-img-text">
              <p>菜名</p>
              <p>作者</p>
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="me-newList">
        <van-divider class="me-new-text">最新列表</van-divider>
        <van-list
          v-model:loading="loading"
          :finished="finished"
          finished-text="没有更多了"
        >
          <van-swipe-cell v-for="item in 10" :key="item" :title="item">
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
    const showPopover = ref(false);
    const { proxy } = getCurrentInstance();
    // 通过 actions 属性来定义菜单选项
    const actions = [
      { text: "扫码", value: 0 },
      { text: "发布", value: 1 },
    ];
    function clickInput() {
      proxy.$router.push("/searchPage");
    }
    const onSelect = (action) => {
      console.info(action);
      if (action.value === 0) {
        proxy.$Toast("敬请期待");
      }
      if (action.value === 1) {
        proxy.$router.push("/upload");
      }
    };
    const searchText = ref("");
    const loading = ref(false);
    const finished = ref(false);
    function onSearch() {}
    function onChange() {}
    return {
      searchText,
      onSearch,
      onChange,
      loading,
      finished,
      actions,
      onSelect,
      showPopover,
      clickInput,
    };
  },
};
</script>