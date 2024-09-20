<script setup>
import { ref, onMounted } from "vue";
import ExamDataP from "../../store/ExamDataP.js";
// pinia数据
const radio = ExamDataP();
// 题目数据
let ExamData = ref(radio.examData);
// 存放用户答案
let userAnswer = ref(new Array(33).fill());
// 修改字为绿色
let checkT = ref();
// 修改字为红色
let checkF = ref();
let enterAnswer = (name, vaule) => {
  // 修改文字颜色
  checkT = "text-green-500";
  checkF = "text-red-500";
};
//   if (answerData.value.find(({ name }) => name != name)) {
//     checkanser.value[name] = { name: name };
//   } else console.log(answerData.value.find(({ name }) => name === name));
// }
//    @click="enterAnswer((name = Dindex + 1), (vuale = radio.value))";
let checkAnswer = () => {
  let y = 0;
  let n = 0;
  //   循环用户答案和服务器答案 如果为真y++ 如果为假n++
  userAnswer.value.forEach((element, i) => {
    if (element == ExamData.value[i].answer) {
      y++;
    } else {
      n++;
    }
  });
  alert("答对了" + y + " 答错了" + n);
  console.log(userAnswer.value);
};
</script>
<template>
  <div class="exam">
    <el-form>
      <!-- 单选题 -->
      <h1>单选题</h1>
      <el-form-item
        :label="data.title"
        v-for="(data, Dindex) in ExamData.slice(0, 22)"
        :key="data"
        class="flex-col"
      >
        <el-radio-group
          v-model="userAnswer[Dindex]"
          v-for="(radio, Rindex) in data.radio"
          :key="radio"
          @change="enterAnswer"
        >
          <el-radio :label="radio.value">
            <!-- if ture 与答案相同为字为绿色 -->
            <span :class="checkT" v-if="radio.value == data.answer">
              {{ radio.title }}
            </span>
            <!-- if else 与答案不相同为红色 -->
            <span v-else :class="checkF">{{ radio.title }}</span>
          </el-radio>
        </el-radio-group>
      </el-form-item>
      <!-- 提交答案并验证 -->
      <el-button type="primary" size="default" @click="checkAnswer"
        >提交</el-button
      >
      <!-- 简答题 -->
      <h1>简答题</h1>
      <el-form-item
        :label="data.title"
        v-for="(data, JDindex) in ExamData.slice(22, 27)"
        :key="data"
        class="flex-col"
      >
        <el-input
          v-model="userAnswer[JDindex + 22]"
          type="textarea"
          placeholder=""
          autosize
          clearable
        ></el-input>
      </el-form-item>
      <h1>算法设计题</h1>
      <el-form-item
        :label="data.title"
        v-for="(data, SJindex) in ExamData.slice(27, 33)"
        :key="data"
        class="flex-col"
      >
        <el-input
          v-model="userAnswer[SJindex + 27]"
          type="textarea"
          placeholder=""
          autosize
          clearable
        ></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped>
.el-form-item {
  @apply w-auto;
  @apply block justify-start;
}
</style>
