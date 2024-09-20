<script setup>
import { defineComponent, reactive, ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
let form = ref({ userName: "", password: "" });
let rules = {
  userName: [
    {
      required: true,
      message: "请输入用户名",
    },
  ],
  password: [
    {
      required: true,
      message: "请输入密码",
    },
  ],
};
let formRef = ref();
let showAll = () => {
  console.log(form.value);
  formRef.value.validate((valid) => {
    if (!valid) return;
    // TODO:调用登录接口
    localStorage.setItem("UserInfo", form.value.userName);
    localStorage.setItem("isLogin", 1);
    router.push({
      path: "/",
    });
  });
};
</script>
<template>
  <div>
    <el-container>
      <div class="loginView">
        <div class="left"></div>
        <div class="right">
          <el-form
            class=""
            :model="form"
            ref="formRef"
            :rules="rules"
            :inline="false"
            size="default"
          >
            <p class="title">你好！🕊</p>
            <el-form-item label="账号" prop="userName">
              <el-input v-model="form.userName" />
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input v-model="form.password" />
            </el-form-item>
            <el-form-item class="buttonView justify-center items-center">
              <el-button type="primary" @click="showAll">登录</el-button>
              <el-button>注册</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </el-container>
  </div>
</template>

<style scoped>
* {
  @apply text-xl font-bold;
  color: rgb(64, 59, 65);
}
.buttonView {
  @apply flex justify-center items-center;
}
.el-form-item__label {
  @apply text-white;
}
.el-container {
  @apply h-screen justify-center items-center backdrop-blur-md;
}
.title {
  @apply text-5xl -translate-y-3/4;
}
.loginView {
  @apply h-3/5 w-3/5 bg-white shadow-xl;
  @apply flex order-2;
  @apply border-spacing-3 rounded-lg;
  @apply outline outline-4 outline-offset-8;
  outline-color: rgb(83, 96, 78);
  box-shadow: 1px 1px 6px rgb(64, 59, 65);
}
.left {
  @apply w-full bg-cover rounded-l-lg;
  background-image: url("../../assets/images/twitter-NyeIgneous-20230222-fireflyAI.jpg");
}
.right {
  @apply w-full rounded-r-lg;
  @apply flex justify-center items-center flex-col;
  @apply shadow-lg;
  background: rgb(253, 253, 253);
}
.el-form {
  @apply flex !justify-center !items-center !flex-col;

  @apply w-full h-full;
}
.el-form-item {
  @apply w-2/4 h-10;
}
.el-input {
  @apply h-10 text-black border-0;
}
.el-input__inner {
  @apply text-black border-0 shadow-none;
}
.el-input__wrapper {
  @apply border-0 shadow-none;
}
.el-input--default {
  @apply border-0 shadow-none;
}
input {
  @apply border-0 shadow-none;
}
</style>
