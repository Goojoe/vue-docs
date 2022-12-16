import { defineUserConfig } from "vuepress";
// 搜索
import { searchPlugin } from "@vuepress/plugin-search";
// 全局组件
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
// 获取路径
import { getDirname, path } from '@vuepress/utils'
import theme from "./theme.js";
const __dirname = getDirname(import.meta.url);


export default defineUserConfig({
    base: "/",
    port: 40002,

    locales: {
        "/": {
            lang: "zh-CN",
            title: "文档演示",
            description: "vuepress-theme-hope 的文档演示",
            // 引用图片
            head: [["meta", { name: "referrer", content: "never" }]],
        },
    },
    // 主题设置
    theme,
    // 插件设置
    plugins: [
        // 注册全局组件的插件
        registerComponentsPlugin({
            componentsDir: path.resolve(__dirname, "./components"),
        }),
        searchPlugin({
            //多语言支持
            locales: {
                '/': {
                    placeholder: '搜索本站',
                },
            },
            // 热键支持
            hotKeys: ['k', '/'],

            // 排除首页
            isSearchable: (page) => page.path !== '/',
        }),
    ],

    shouldPrefetch: false,
});
