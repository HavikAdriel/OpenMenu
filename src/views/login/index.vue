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
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">
          登录
        </van-button>
      </div>
      <div class="me-foot">
        <van-row>
          <van-col span="4" @click="register">申请注册</van-col>
          <van-col span="16"></van-col>
          <van-col span="4" @click="forgetPwd">忘记密码</van-col>
        </van-row>
      </div>
    </van-form>
  </div>
</template>
<script>
import "./index.scss";
import { getCurrentInstance, ref } from "vue";
import { useRouter } from 'vue-router'
export default {
  setup() {
    const { proxy } = getCurrentInstance();
    const userName = ref("");
    const password = ref("");
    const router = useRouter();
    const onSubmit = () => {
      if (userName.value === "admin" && password.value === "admin") {
        router.push("/default")
        return
      }
      proxy.$Dialog({ message: "用户名或密码错误" })
    }
    const forgetPwd=()=>{
        proxy.$Dialog({ message: "请联系管理员QQ(1491184849)" })
    };
    function register(){
        router.push("register")
    }
    return {
      title: "欢迎登录",
      userName,
      password,
      onSubmit,
      forgetPwd,
      register
    }
  },
};
</script>