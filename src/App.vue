<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
router.beforeEach(async (to, from, next) => {
  if (!localStorage.getItem("isLogin")) {
    if (to.name !== "login") {
      // 将条件修改为字符串而不是路径
      next({ name: "login" }); // 重定向到登录页
    } else {
      next(); // 继续路由导航
    }
  } else {
    next(); // 继续路由导航
  }
});
</script>

<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
