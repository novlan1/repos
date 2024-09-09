import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "FirstAsk",
  base: '/repos/',
  description: "用爱开源",  
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
  head: [  
      [
        'script',
        {},
        ` 
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?3825fe54a812ed665c0e160e73edff56";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })(); 
        `
      ]
    ]
})
