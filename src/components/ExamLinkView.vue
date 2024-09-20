<script setup>
import { reactive, ref, onMounted, toRefs } from "vue";
const examLinks = reactive({
  examLink: [{ key: "/mgmt/exam/Algorithm", title: "算法设计与分析" }],
});
// let showExam = false;
// onMounted(() => {
//   // if (sessionStorage.getItem) {
//   //   showExam = false;
//   // }
//   console.log(sessionStorage);
//   console.log(examLinks.examLink[0].key);
// });
// onBeforeRouteUpdate((to, from) => {
//   if (to.name === examLinks.examLink[0].key) {
//     sessionStorage.setItem("MenuActive", to.path);
//   }
// });
</script>
<template>
  <div>
    <el-row :gutter="20" v-if="!showExam">
      <el-col
        v-for="(item, index) in examLinks.examLink"
        :key="index"
        :span="5"
        :offset="0"
      >
        <router-link :to="item.key">
          <el-card class="box-card">
            <template #header>
              <div class="card-header">
                <span>{{ item.title }}</span>
              </div>
            </template>
            <el-empty description=" " />
          </el-card>
        </router-link>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped></style>
