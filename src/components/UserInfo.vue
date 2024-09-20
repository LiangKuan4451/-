<script setup>
import { createApp, onBeforeMount } from "vue";
import { useRouter } from "vue-router";
const Router = useRouter();
let userName = "";
let selectMod = () => {
  if (localStorage.getItem("isLogin") != 1) {
    userName = "登录";
  } else {
    userName = localStorage.getItem("UserInfo");
  }
};
let toLogin = () => {
  if (localStorage.getItem("isLogin") != 1) {
    Router.push({ path: "/login" });
  }
};
let outLogin = () => {
  localStorage.removeItem("isLogin");
  localStorage.removeItem("UserInfo");
  Router.push({ path: "/login" });
};
onBeforeMount(() => {
  selectMod();
});
</script>
<template>
  <div class="h-full translate-y-1/3">
    <el-dropdown trigger="click" @click="toLogin">
      <span class="el-dropdown-link">
        <el-icon><user /></el-icon>
        {{ userName }}
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item class="clearfix">
            个人资料
            <el-badge class="mark" />
          </el-dropdown-item>
          <el-dropdown-item class="clearfix" @click="outLogin">
            登出
            <el-badge class="mark" />
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<style scoped>
.el-button {
  border: 0;
}
</style>
