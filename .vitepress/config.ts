import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "novlan1",
  base: '/repos/',
  description: "用爱开源",  
  lang: 'zh-CN',
  appearance: {
    initialValue:'dark',
  },
  themeConfig: {    
    outline:{
      level:[2,4],
      label: '目录',
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' }, 
    ],

    sidebar:  [
      { 
        text: '', 
        link: '/org/about',
        items: [
              { text: '关于我们', link: '/org/about' },
              { text: '加入我们', link: '/org/join' },
              { text: '任务发布', link: '/org/tasks' },
              { text: '联系方式', link: '/org/contact' }
        ]               
      },
      { 
        text: '开源项目', 
        link: '/repos' 
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/novlan1' }
    ]
  },
  head: [['link', { rel: 'icon', href: 'https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/8/own_mike_0d0107312bfd164de4.ico' }]]
})
