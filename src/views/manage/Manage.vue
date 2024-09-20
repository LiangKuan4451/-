<script setup>
import { onMounted, ref, reactive, onUpdated, provide } from "vue";
import BreadCrumb from "@/store/BreadCrumb.js";
import ManageDialog from "@/components/ManageDialog.vue";
import { storeToRefs } from "pinia";
import axios from "axios";
import ManageDialogVue from "../../components/ManageDialog.vue";
let routerdb = BreadCrumb();
let { routerPath } = storeToRefs(routerdb);
let ClickEvent;
// 表单选择数据
let dictDB = ref({
  ownerType: {},
  ownerProp: {},
  ownerProf: {},
  annualOutput: {},
  placeType: {},
});
// 表格数据
let companyDB = ref([
  {
    id: "",
    name: "",
    addr: "",
    regDate: "",
    ownerType: undefined,
    ownerProf: undefined,
  },
]);
// 分页数据
let pagesDB = ref({
  current: undefined,
  size: undefined,
  pages: undefined,
  total: undefined,
});
// 所属产业的值
let selectOwnerProf = ref([1, 2, 3, 4]);
// 主体类型的值
let selectOwnerType = ref([1, 2, 3]);
// 搜索输入框的值
let searchInfo = ref(undefined);
// 对话框属性
let isShowDialog = ref({
  isDialog: false,
  dialogTitle: "",
});
// 添加、修改、编辑属性，继承到组件ManageDialong.vue
let enditValue = ref("");
// 删除行的数据
let RowsDB = ref({
  id: undefined,
});
// 决定弹出对话框的内容
let ManageDialogEvent = ref();
// 继承到子组件
provide("dictDB", dictDB);
provide("enditValue", enditValue);
provide("selectOwnerProf", selectOwnerProf);
provide("selectOwnerType", selectOwnerType);
provide("ManageDialogEvent", ManageDialogEvent);
// 对话框添加主体信息事件
let addForm = () => {
  isShowDialog.value.isDialog = true;
  isShowDialog.value.dialogTitle = "添加主体信息";
  enditValue.value = {};
  ManageDialogEvent.value = "insert";
};
// 对话框修改主体信息事件
let enditForm = () => {
  isShowDialog.value.isDialog = true;
  isShowDialog.value.dialogTitle = "修改主体信息";
  ManageDialogEvent.value = "updated";
};
let handleRowClick = (row) => {
  enditValue.value = row;
  // console.log("row", row); // 在控制台打印行数据
  // console.log("M", enditValue.value); // 在控制台打印行数据
};
// 获取行的数据
let getRowsDB = (selection, row) => {
  // console.log("selection", selection);
  // console.log("row", row);
  RowsDB.value = row;
  // console.log("RowsDB", RowsDB.value);
};
// 转换主题类型ownerType和所属行业ownerProf为中文
// let change_ownerType_and_ownerProf = () => {

// }
// 获取分页数据
let getIPageDB = () => {
  axios
    .get("/getIPageCompany", {
      params: {
        id: undefined,
        name: undefined,
        ownerType: undefined,
        ownerProf: undefined,
        addr: undefined,
        regDate: undefined,
        // 分页数据
        page: pagesDB.value.current,
        size: pagesDB.value.size,
      },
    })
    .then((res) => {
      // console.log("res", res);
      let resData = res.data.data.records;
      companyDB.value = resData;
      // 转换主题类型ownerType数据为中文
      for (let i = 0; i < res.data.data.size; i++) {
        if (res.data.data.records[i].ownerType == 1) {
          companyDB.value[i].ownerType = "生产主体";
        } else if (res.data.data.records[i].ownerType == 2) {
          companyDB.value[i].ownerType = "经营主体";
        } else {
          companyDB.value[i].ownerType = "生产经营主体";
        }
      }

      // 转换所属行业ownerProf数据为中文
      for (let i = 0; i < res.data.data.size; i++) {
        if (res.data.data.records[i].ownerProf == 1) {
          companyDB.value[i].ownerProf = "种植业";
        } else if (res.data.data.records[i].ownerProf == 2) {
          companyDB.value[i].ownerProf = "养殖业";
        } else if (res.data.data.records[i].ownerProf == 3) {
          companyDB.value[i].ownerProf = "畜牧业";
        } else {
          companyDB.value[i].ownerProf = "水产业";
        }
      }
      // 分页数据
      pagesDB.value.current = res.data.data.current;
      pagesDB.value.size = res.data.data.size;
      pagesDB.value.pages = res.data.data.pages;
      pagesDB.value.total = res.data.data.total;
      // console.log("resData", resData);
      // console.log("pagesDB", pagesDB.value);
      // console.log("ownerDB", dictDB.value);
    });
};
// 请求字典
let getDictDB = () => {
  axios.get("/getDictList").then((res) => {
    // console.log(res.data.data);
    // 将字典分类
    for (let i = 0; i < res.data.data.length; i++) {
      if (res.data.data[i].dictSort == 1) {
        dictDB.value.ownerType[i] = res.data.data[i];
      } else if (res.data.data[i].dictSort == 2) {
        dictDB.value.ownerProp[i] = res.data.data[i];
      } else if (res.data.data[i].dictSort == 3) {
        dictDB.value.ownerProf[i] = res.data.data[i];
      } else if (res.data.data[i].dictSort == 4) {
        dictDB.value.annualOutput[i] = res.data.data[i];
      } else if (res.data.data[i].dictSort == 5) {
        dictDB.value.placeType[i] = res.data.data[i];
      }
    }
    // console.log("ownerProf", dictDB.value);
  });
};
// 查询请求
let SearchDB = () => {
  axios
    .post("/selectIPageCompany", {
      name: searchInfo.value,
      ownerType: selectOwnerType.value,
      ownerProf: selectOwnerProf.value,
    })
    .then((res) => {
      // console.log(selectOwnerType.value);
      // console.log(selectOwnerProf.value);
      let resData = res.data.data.records;
      companyDB.value = resData;
      // 转换主题类型ownerType数据为中文
      for (let i = 0; i < res.data.data.size; i++) {
        if (res.data.data.records[i].ownerType == 1) {
          companyDB.value[i].ownerType = "生产主体";
        } else if (res.data.data.records[i].ownerType == 2) {
          companyDB.value[i].ownerType = "经营主体";
        } else {
          companyDB.value[i].ownerType = "生产经营主体";
        }
      }
      // 转换所属行业ownerProf数据为中文
      for (let i = 0; i < res.data.data.size; i++) {
        if (res.data.data.records[i].ownerProf == 1) {
          companyDB.value[i].ownerProf = "种植业";
        } else if (res.data.data.records[i].ownerProf == 2) {
          companyDB.value[i].ownerProf = "养殖业";
        } else if (res.data.data.records[i].ownerProf == 3) {
          companyDB.value[i].ownerProf = "畜牧业";
        } else {
          companyDB.value[i].ownerProf = "水产业";
        }
      }
    });
};
// 初始化数据
onMounted(() => {
  getIPageDB();
  getDictDB();
});

// 单个删除&多个删除
let deletThisRow = () => {
  isShowDialog.value.isDialog = true;
  isShowDialog.value.dialogTitle = "删除主体信息";
  ManageDialogEvent.value = "delete";
};
// 请求分页数据
let PagesAxios = (pageDB) => {
  axios
    .get(`/getIPageCompany`, {
      params: {
        // 分页数据
        page: pageDB,
        size: pagesDB.value.size,
      },
    })
    .then((res) => {
      pagesDB.value.current = pageDB;
      getIPageDB();
      console.log("PagesAxios", res);
      // console.log(pageDB);
    });
};
</script>
<template>
  <div>
    <el-form ref="form" label-width="80px" :inline="false">
      <!-- 第一行 -->
      <el-row :gutter="18" justify="start">
        <el-col :span="5">
          <!-- 主体名称 -->
          <el-form-item label="主体名称">
            <el-input
              v-model="searchInfo"
              placeholder="请输入主体名称"
            ></el-input>
          </el-form-item>
        </el-col>
        <!-- 主体类型 -->
        <el-col :span="5">
          <el-form-item label="主体类型">
            <el-select
              v-model="selectOwnerType"
              placeholder="请选择主体类型"
              clearable
              filterable
            >
              <el-option
                v-for="item in dictDB.ownerType"
                :key="item.dictValue"
                :label="item.dictLabel"
                :value="item.dictValue"
              >
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <!-- 所属行业 -->
        <el-col :span="5" :pull="0">
          <el-form-item label="所属行业">
            <el-select
              v-model="selectOwnerProf"
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
        </el-col>
        <!-- 按钮 -->
        <el-col :span="5" :pull="0">
          <el-form-item label-width="0">
            <el-button
              @click="SearchDB"
              type="primary"
              size="default"
              icon="Search"
              >搜索</el-button
            >
            <el-button type="default" size="default" icon="Refresh"
              >重置</el-button
            >
          </el-form-item>
        </el-col>
      </el-row>
      <!-- 第二行 -->
      <el-row :gutter="18">
        <!-- 左边按钮 -->
        <el-col :span="17">
          <el-form-item label-width="0">
            <el-button
              @click="addForm"
              type="primary"
              size="default"
              icon="Search"
              >添加</el-button
            >
            <el-button
              @click="deletThisRow"
              type="default"
              size="default"
              icon="Refresh"
              >删除</el-button
            >
          </el-form-item>
        </el-col>
        <!-- 右边按钮 -->
        <el-col :span="4" :pull="1">
          <el-form-item label-width="0">
            <el-button
              @click="getIPageDB"
              type="primary"
              circle
              icon="Refresh"
            ></el-button>
          </el-form-item>
        </el-col>
      </el-row>
      <!-- 表格 -->
      <el-form-item label-width="0">
        <el-table
          @select="getRowsDB"
          @cell-mouse-enter="handleRowClick"
          :data="companyDB"
          border
          stripe
          fit
        >
          <el-table-column type="selection"></el-table-column>
          <el-table-column prop="event" label="操作">
            <el-button type="primary" @click="enditForm">编辑</el-button>
            <el-button type="primary" @click="deletThisRow">删除</el-button>
          </el-table-column>
          <el-table-column prop="name" label="企业名称"> </el-table-column>
          <el-table-column prop="ownerType" label="主体类型"> </el-table-column>
          <el-table-column prop="ownerProf" label="所属行业"> </el-table-column>
          <el-table-column prop="addr" label="地址"> </el-table-column>
          <el-table-column prop="regDate" label="注册日期"> </el-table-column>
        </el-table>
      </el-form-item>
      <!-- 分页 -->
      <el-pagination
        layout="total, prev, pager, next, jumper"
        :current-page="pagesDB.current"
        :total="pagesDB.total"
        :page-count="pagesDB.pages"
        @current-change="PagesAxios"
      />
    </el-form>
    <!-- 提示框 -->
    <el-dialog
      center
      v-model="isShowDialog.isDialog"
      :title="isShowDialog.dialogTitle"
      width="30%"
    >
      <ManageDialog
        @cancel="isShowDialog.isDialog = false"
        @refreshDB="getIPageDB"
      ></ManageDialog>
    </el-dialog>
  </div>
</template>

<style scoped>
.el-select {
  @apply w-full;
}
</style>
