module.exports = ctx => ({
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Logo 集散地',
      description: '使用 CSS 技术绘制 Logo'
    }
  },
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  themeConfig: {
    repo: 'liuliangsir/awesome-brand-logo-collections',
    editLinks: true,
    docsDir: 'docs',
    locales: {
      '/': {
        editLinkText: ' 在 GitHub 上编辑此页',
        lastUpdated: ' 上次更新',
        nav: require('./nav/zh'),
        sidebar: {
          '/guide/': guideSidebarGenerator('指南', '介绍')
        }
      }
    }
  },
  plugins: [
    ['@vuepress/back-to-top', true],
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }],
    ['@vuepress/medium-zoom', true],
    ['@vuepress/notification', true],
    ['@vuepress/container', {
      type: 'upgrade',
      before: info => `<UpgradePath title="${info}">`,
      after: '</UpgradePath>',
    }]
  ],
  extraWatchFiles: [
    '.vuepress/nav/zh.js'
  ]
})

function guideSidebarGenerator (group, introduction) {
  return [
    {
      title: group,
      collapsable: false,
      sidebarDepth: 2,
      children: [
        ['', introduction]
      ]
    },
  ]
}
