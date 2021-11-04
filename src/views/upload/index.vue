<template>
  <div class="container me-upload">
    <NavBar :title="title"></NavBar>
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="name"
          name="菜名"
          label="菜名："
          placeholder="请填写菜名"
          :rules="[{ required: true, message: '请填写菜名' }]"
        />
        <van-field
          v-model="name"
          name="分类"
          label="分类："
          placeholder="请填写分类"
          :rules="[{ required: true, message: '请填写分类' }]"
        />
        <van-field
          v-model="name"
          name="食材"
          label="食材："
          placeholder="请填写食材"
          :rules="[{ required: true, message: '请填写食材' }]"
        />
        <van-field
          v-model="name"
          name="花费"
          label="花费："
          placeholder="请填写花费"
          :rules="[{ required: true, message: '请填写花费' }]"
        />
        <van-field
          v-model="name"
          name="时长"
          label="时长："
          placeholder="请填写时长"
          :rules="[{ required: true, message: '请填写时长' }]"
        />
        <van-field
          v-model="name"
          rows="3"
          autosize
          label="制作方法："
          type="textarea"
          maxlength="500"
          placeholder="请填写制作方法"
          show-word-limit
          :rules="[{ required: true, message: '请填写制作方法' }]"
        />
        <van-field name="uploader" label="文件上传：">
          <template #input>
            <van-uploader v-model="value" />
          </template>
        </van-field>
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">
          确定
        </van-button>
      </div>
    </van-form>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import { ref } from "vue";
export default {
  components: {
    NavBar,
  },
  setup() {
    const title = ref("上传页面");
    const name = ref("");
    const afterRead = (file) => {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    };
    const value = ref([{ url: "https://img.yzcdn.cn/vant/leaf.jpg" }]);
    function onSubmit() {}
    return {
      title,
      onSubmit,
      name,
      afterRead,
      value,
    };
  },
};
</script>