<script setup>
import { defineComponent, reactive } from "vue";
import Menu from "@/components/Menu.vue";
import UserInfo from "@/components/UserInfo.vue";
import BreadC from "@/components/BreadCrumb.vue";
import { useRouter, useRoute } from "vue-router";
import BreadCrumb from "../store/BreadCrumb.js";
const Router = useRouter();
const routerdb = BreadCrumb();
Router.beforeEach(async (to, from, next) => {
  let toMatched = to.matched.map((item) => {
    return item.meta.title;
  });
  let toPath = to.matched.map((item) => {
    return item.meta.path;
  });
  routerdb.$patch((state) => {
    state.routerTitle = toMatched;
    state.routerPath = toPath;
  });

  next();
});
const routes = Router.options.routes;
console.log("routes", routes);
</script>
<template>
  <div>
    <el-container>
      <!-- 左边栏 -->
      <el-aside width="180px">
        <div></div>
        <Menu></Menu>
      </el-aside>
      <el-container direction="vertical">
        <!-- 头部 -->
        <el-header height="50px">
          <el-row class="translate-y-1/3">
            <el-col :span="16">
              <BreadC></BreadC>
            </el-col>
            <el-col :span="2" :push="6">
              <UserInfo></UserInfo>
            </el-col>
          </el-row>
        </el-header>
        <!-- 主体 -->
        <el-main>
          <router-view></router-view>
        </el-main>
        <!-- 底部 -->
        <!-- <el-footer> </el-footer> -->
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
.el-header {
  @apply border-b-2;
}
</style>
