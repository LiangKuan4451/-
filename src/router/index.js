import { createRouter, createWebHashHistory, createWebHistory, useRouter } from 'vue-router'
// const ExamRouter = {
//     path: "exam",
//     component: {
//         default: () => import("@/views/exam/Exam.vue"),
//         Algorithm: () => import("@/views/exam/Algorithm.vue")
//     },
//     meta: { title: "考试" },
// }
const routers = [
    { path: "/", redirect: "/mgmt/" },
    {
        path: "/mgmt/", component: () => import("@/views/mgmt.vue"), meta: { title: "主页" },

        children: [
            { path: "home", component: () => import("@/views/home/Home.vue"), name: "home", },
            { path: "links", component: () => import("@/views/home/Links.vue"), name: "links", meta: { title: "链接" } },
            { path: "manage", component: () => import("@/views/manage/Manage.vue"), name: "manage", meta: { title: "管理" } },
            { path: "exam", component: () => import("@/views/exam/Algorithm.vue"), name: "exam", meta: { title: "算法考试" } },
        ]
    },
    {
        path: "/login", component: () => import("@/views/login/Login.vue"), name: "login", meta: {
            title: "登录"
        }
    },


    // {
    //     path: "/mgmt/exam/algorithm",
    //     component: () => import("@/views/exam/Algorithm.vue"),
    //     name: "algorithm",
    //     meta: { title: "算法设计与分析" },
    // }

];

const Router = createRouter({
    history: createWebHashHistory(),
    routes: routers
});

Router.beforeEach(async (to) => {
    if (to.meta.title) {
        document.title = to.meta.title + " - 后台管理系统"
    }
})

export default Router