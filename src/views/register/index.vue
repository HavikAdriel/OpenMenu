<template>
  <div class="container">
    <van-form @submit="onSubmit" class="me-login-form">
      <h3>{{ title }}</h3>
      <van-cell-group inset>
        <van-field
          v-model="userName"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          name="sex"
          label="性别"
          :rules="[{ required: true, message: '请填写性别' }]"
        >
          <template #input>
            <van-radio-group v-model="sex" direction="horizontal">
              <van-radio name="1">男</van-radio>
              <van-radio name="0">女</van-radio>
            </van-radio-group>
          </template>
        </van-field>
        <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <van-field
          v-model="password2"
          type="password"
          name="确认密码"
          label="确认密码"
          placeholder="确认密码"
          :rules="[
            { required: true, message: '请再次填写密码' },
            { validator: passwordVal },
          ]"
        />
        <van-field
          v-model="reason"
          rows="2"
          autosize
          label="申请理由"
          type="textarea"
          maxlength="100"
          placeholder="请输入申请理由"
          show-word-limit
          :rules="[{ required: true, message: '请填写申请理由' }]"
        />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">
          确认申请
        </van-button>
      </div>
      <div class="me-foot">
        <p @click="toLogin">返回登录</p>
      </div>
    </van-form>
  </div>
</template>
<script>
import "./index.scss";
import { getCurrentInstance, ref } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    const { proxy } = getCurrentInstance();
    const userName = ref("");
    const password = ref("");
    const password2 = ref("");
    const reason = ref("");
    const sex = ref("1");
    const router = useRouter();
    const onSubmit = () => {
      proxy.$Dialog({ message: "提交申请成功，我们将尽快处理" });
    };
    function toLogin() {
      router.push("/");
    }
    function passwordVal(val) {
      if (val != password.value) {
        return `两次密码不一致，请重输`;
      }
    }
    return {
      title: "申请注册",
      userName,
      password,
      password2,
      onSubmit,
      toLogin,
      passwordVal,
      sex,
      reason
    };
  },
};
</script>