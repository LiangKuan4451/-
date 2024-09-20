<script setup>
import { defineComponent, reactive, ref } from "vue";
const menus = reactive({
  menuItem: [
    { key: "/mgmt/home", title: "主页" },
    {
      key: "/mgmt/manage",
      title: "管理系统",
    },
    { key: "/mgmt/links", title: "链接" },
    { key: "/mgmt/exam", title: "考试" },
  ],
});
let MenuActive = ref(
  sessionStorage.getItem("MenuActive") == null
    ? "/mgmt/home"
    : sessionStorage.getItem("MenuActive")
);
let selectMenu = (index, indexPath, item, routeResult) => {
  sessionStorage.setItem("MenuActive", index);
};
</script>
<template>
  <div>
    <el-menu
      mode="vertical"
      :default-active="MenuActive"
      router
      @select="selectMenu"
    >
      <el-menu-item
        v-for="(item, idx) in menus.menuItem"
        :index="item.key"
        :key="item.key"
      >
        {{ item.title }}
      </el-menu-item>
      <p>当前路径：{{ $route.path }}</p>
      <p>动态参数：{{ $route.params }}</p>
      <p>查询参数：{{ $route.query }}</p>
      <p>Hash 值：{{ $route.hash }}</p>
      <p>完整路径：{{ $route.fullPath }}</p>
    </el-menu>
  </div>
</template>

<style scoped>
.el-menu {
  @apply h-screen;
}
.el-menu-item {
  @apply text-base font-bold;
}
.el-menu-item.is-active {
  @apply text-white border-r-8;
  border-color: rgb(95, 90, 87);
  background: rgb(149, 172, 140);
}
</style>
