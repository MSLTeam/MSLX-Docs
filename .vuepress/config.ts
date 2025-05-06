import { defineUserConfig } from "vuepress";
import recoTheme from "vuepress-theme-reco";
import { viteBundler } from '@vuepress/bundler-vite'
import { webpackBundler } from '@vuepress/bundler-webpack'

export default defineUserConfig({
  title: "MSLX",
  description: "MSLX-新一代跨平台服务器管理/联机工具",
  bundler: viteBundler(),
  // bundler: webpackBundler(),
  theme: recoTheme({
    logo: "/logo.png",
    author: "MSLTeam",
    authorAvatar: "/logo.png",
    docsRepo: "https://github.com/vuepress-reco/vuepress-theme-reco-next",
    docsBranch: "main",
    docsDir: "docs",
    lastUpdatedText: "",
    // series 为原 sidebar
    series: {
      "/docs/quickstart/": [
        {
          text: "快速开始",
          children: ["windows","macos","linux"],
          icon: ""
        }
      ],
    },
    navbar: [
      { text: "主页", link: "/" },
      { text: "文档", link: "/docs/quickstart" },
      {
        text: "友情链接",
        children: [
          { text: "MSL", link: "https://www.mslmc.cn" },
          { text: "MSL用户中心", link: "https://user.mslmc.net" },
        ],
      },
    ],
    bulletin: {
      body: [
        {
          type: "text",
          content: `🎉🎉🎉 MSLX 跨平台开服联机软件正在火热🔥开发中~ 欢迎下载体验尝鲜哦~`,
          style: "font-size: 12px;",
        },
        {
          type: "hr",
        },
        {
          type: "title",
          content: "QQ 群",
        },
        {
          type: "text",
          content: `
          <ul>
            <li>QQ群1：1145888872</li>
            <li>QQ群2：234477679</li>
          </ul>`,
          style: "font-size: 12px;",
        },
        {
          type: "hr",
        },
        {
          type: "title",
          content: "GitHub",
        },
        {
          type: "text",
          content: `
          <ul>
            <li><a href="https://github.com/MSLTeam/MSLX/issues">Issues<a/></li>
          </ul>`,
          style: "font-size: 12px;",
        },
        //{
          //type: "hr",
        //},
        //{
          //type: "buttongroup",
          //children: [
            //{
              //text: "打赏",
              //link: "/docs/others/donate.html",
            //},
          //],
       // },
      ],
    },
    // commentConfig: {
    //   type: 'valine',
    //   // options 与 1.x 的 valineConfig 配置一致
    //   options: {
    //     // appId: 'xxx',
    //     // appKey: 'xxx',
    //     // placeholder: '填写邮箱可以收到回复提醒哦！',
    //     // verify: true, // 验证码服务
    //     // notify: true,
    //     // recordIP: true,
    //     // hideComments: true // 隐藏评论
    //   },
    // },
  }),
  // debug: true,
});
