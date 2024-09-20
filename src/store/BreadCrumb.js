import { defineStore } from "pinia";
const BreadCrumb = defineStore("routerdb", {
    state: () => {
        return {
            routerTitle: [],
            routerPath: [],
        }
    }
});
export default BreadCrumb;