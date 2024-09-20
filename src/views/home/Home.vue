<script setup>
import { defineComponent, reactive } from "vue";
import WallPaper from "../../assets/images/Full-twitter-NyeIgneous-20230222-fireflyAI.jpg";
import Menu from "@/components/Menu.vue";
let image = WallPaper;
</script>
<template>
  <div class="flex justify-center items-center content-center">
    <el-image class="w-11/12" :src="image" :lazy="true"></el-image>
  </div>
</template>

<style scoped></style>
