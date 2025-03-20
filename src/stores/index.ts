import { defineStore } from "pinia";

export const useStore = defineStore("main", {
    state: () => {
        return {
            name: "xiaoFan",
        };
    },
    //持久化插件
    persist: true,
})