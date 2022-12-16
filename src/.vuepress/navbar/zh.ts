import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
    "/",
    "/quicknav/",
    {
        text: "Windows",
        icon: "windows",
        prefix: "/windows/",
        children: ["bat/","powershell/"]
    },
    {
        text: "编程语言",
        icon: "language",
        prefix: "/lang/",
        children: ["python/"]
    },
    {
        text: "Linux",
        icon: "linux",
        link: "/linux/"
    },







    // {
    //     text: "案例",
    //     icon: "discover",
    //     link: "/demo/"
    // },
    // {
    //     text: "指南",
    //     icon: "creative",
    //     prefix: "/guide/",
    //     children: [
    //         {
    //             text: "Bar",
    //             icon: "creative",
    //             prefix: "bar/",
    //             children: ["baz", { text: "...", icon: "more", link: "" }],
    //         },
    //         {
    //             text: "Foo",
    //             icon: "config",
    //             prefix: "foo/",
    //             children: ["ray", { text: "...", icon: "more", link: "" }],
    //         },
    //     ],
    // },
    // {
    //     text: "V2 文档",
    //     icon: "note",
    //     link: "https://vuepress-theme-hope.github.io/v2/",
    // },
]);
