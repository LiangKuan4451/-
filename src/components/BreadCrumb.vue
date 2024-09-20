<script setup>
import BreadCrumb from "../store/BreadCrumb.js";
import { storeToRefs } from "pinia";
let routerdb = BreadCrumb();
let { routerPath, routerTitle } = storeToRefs(routerdb);
</script>
<template>
  <div class="h-full">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item
        :to="routerPath"
        v-for="(item, index) in routerTitle"
        :key="item"
      >
        {{ item }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<style scoped>
.el-breadcrumb {
  @apply translate-y-1/3 h-full align-top;
}
</style>
