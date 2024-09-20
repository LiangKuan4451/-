<script setup>
import { ref, defineEmits, inject } from "vue";
import axios from "axios";
// 定义分类
let emt = defineEmits(["cancel", "delete", "updated", "insert", "refreshDB"]);
let ownerDB = inject("ownerDB");
let dictDB = inject("dictDB");
let enditValue = inject("enditValue");
let ManageDialogEvent = inject("ManageDialogEvent");
let doYes = () => {
  // console.log(enditValue.value);
  if (ManageDialogEvent.value == "delete") {
    // 删除功能
    axios
      .post("/removeCompany", {
        id: enditValue.value.id,
      })
      .then((res) => {});
    doCancel();
    emt("refreshDB");
  }
  // 更新功能
  else if (ManageDialogEvent.value == "updated") {
    axios
      .post("/updateCompany", {
        id: enditValue.value.id,
        name: enditValue.value.name,
        ownerType: enditValue.value.ownerType,
        ownerProf: enditValue.value.ownerProf,
        addr: enditValue.value.addr,
        regDate: enditValue.value.regDate,
      })
      .then((res) => {
        location.reload();
      });
    doCancel();
  }
  // 插入数据
  else if (ManageDialogEvent.value == "insert") {
    axios
      .post("/insertCompany", {
        name: enditValue.value.name,
        ownerType: enditValue.value.ownerType,
        ownerProf: enditValue.value.ownerProf,
        addr: enditValue.value.addr,
        regDate: enditValue.value.regDate,
      })
      .then((res) => {
        location.reload();
      });
    doCancel();
    // emt("refreshDB");
  }
};
let doCancel = () => {
  emt("cancel");
};
</script>
<template>
  <div>
    <el-form v-if="ManageDialogEvent != 'delete'">
      <el-form-item label="企业名称">
        <!-- 点击编辑时 -->
        <el-input v-model="enditValue.name" autocomplete="off" />
      </el-form-item>
      <!-- 主体类型 -->
      <el-form-item label="主体类型">
        <el-select
          v-model="enditValue.ownerType"
          placeholder="请选择主体类型"
          clearable
          filterable
        >
          <!-- 主体类型选择框内容 -->
          <el-option
            v-for="item in dictDB.ownerType"
            :key="item.dictValue"
            :label="item.dictLabel"
            :value="item.dictValue"
          >
          </el-option>
        </el-select>
        <!-- 所属行业 -->
      </el-form-item>
      <el-form-item label="所属行业">
        <el-select
          v-model="enditValue.ownerProf"
          placeholder="请选择所属行业"
          clearable
          filterable
        >
          <el-option
            v-for="item in dictDB.ownerProf"
            :key="item.dictValue"
            :label="item.dictLabel"
            :value="item.dictValue"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="详细地址">
        <el-input v-model="enditValue.addr" autocomplete="off" />
      </el-form-item>
      <el-form-item label="注册日期">
        <el-date-picker
          v-model="enditValue.regDate"
          type="date"
          placeholder="选择日期"
        />
      </el-form-item>
    </el-form>
    <div class="mb-3" v-else>你确定要删除吗？</div>
    <span class="dialog-footer">
      <el-button @click="doCancel">取消</el-button>
      <el-button @click="doYes" type="primary">确定</el-button>
    </span>
  </div>
</template>

<style scoped>
.el-col {
  margin: 0 auto;
}
.el-form-item .el-select {
  @apply w-full;
}
</style>
