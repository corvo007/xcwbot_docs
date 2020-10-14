const { description } = require('../../package')

module.exports = {
  base: '/',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: '小仓唯Bot',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: '小仓唯Bot文档',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'icon', href: 'https://image.pcrbotlink.top/favicon.ico' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    logo:'https://image.pcrbotlink.top/favicon.ico',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    smoothScroll: true,
    nextLinks: true,
    // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
    prevLinks: true,
    nav: [
      {
        text: '主页',
        link: 'https://pcrbotlink.top',
      },
      {
        text: '常见问题',
        link: '/guide/commonquestion'
      },
      {
        text: '商店',
        link: 'https://shop.pcrbotlink.top'
      },
      {
        text: '购买指南',
        link: '/shop/'
      },
      {
        text: '促销活动',
        link: '/shop/saleactivity'
      },
    ],
    sidebar: [
        {
          title: '使用指南',
          path: '/guide/',
          collapsable: false,
          children: [
            '/guide/',
            '/guide/updatelog',
            '/guide/authsystem',
            '/guide/clanbattle',
            '/guide/clanbattlemanual',
            '/guide/practicalfunc',
            '/guide/funfunc',
            '/guide/commonquestion'
          ]
        },
        {
          title: '用户协议',
          path: '/EULA/',
          collapsable: false,
          children: [
            ['/EULA/','小仓唯Bot用户协议']
          ]
        },
        {
          title: '商店',
          path: '/shop/',
          collapsable: false,
          children: [
            '/shop/',
            '/shop/saleactivity'
          ]
        }    
    ]
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    'vuepress-plugin-clean-urls',
    'vuepress-plugin-nprogress'
  ]
}
