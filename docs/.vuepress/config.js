module.exports = {
  theme: 'antdocs',
  title: '小仓唯Bot',
  description: '小仓唯Bot文档',
  description: "小仓唯Bot的使用文档",
  base: "/",
  head: [
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['link', { rel: 'icon', href: 'https://image.pcrbotlink.top/favicon.ico' }]
  ],
  markdown: {
    lineNumbers: false,
  },
  themeConfig: {
    logo: 'https://image.pcrbotlink.top/favicon.ico',
    smoothScroll: true,
    nav: require("./config/nav"),
    sidebar: require("./config/sidebar"),
    lastUpdated: "上次更新",
    repo: "https://github.com/corvo007/xcwbot_docs_release",
    editLinks: false,
    algolia: {
      apiKey: 'badb7dba029bf0d305532529f3bf6469',
      indexName: 'pcrbotlink',
    }
  },
  plugins: {
    '@vuepress/medium-zoom': {
      selector: '.theme-antdocs-content :not(a) > img',
      options: {
        margin: 16
      }
    }
  }
};