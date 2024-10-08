<template>
  <nav v-if="userLinks.length || repoLink" class="nav-links">
    <a-menu :mode="currentStyle" id="nav" v-model="currentPage" :selectable="false">
      <template v-for="item in userLinks">
        <a-sub-menu v-if="item.type === 'links'" :key="link(item.link)">
          <span slot="title">
            {{ item.text }}
          </span>
          <template v-for="(subItem, index) in item.items">
            <a-menu-item-group :title="subItem.text" v-if="subItem.type === 'links'" :key="link(subItem.link) || index">
              <a-menu-item v-for="childSubItem in subItem.items" :key="link(childSubItem.link)">
                <a v-if="isExtlink(childSubItem.link)" :href="childSubItem.link" target="_blank" rel="noopener noreferrer">
                  {{ childSubItem.text }}
                  <a-icon type="link" />
                </a>
                <RouterLink v-else :to="link(childSubItem.link)">
                  {{ childSubItem.text }}
                </RouterLink>
              </a-menu-item>
            </a-menu-item-group>
            <a-menu-item :key="link(subItem.link)" v-else>
              <a v-if="isExtlink(subItem.link)" :href="subItem.link" target="_blank" rel="noopener noreferrer">
                {{ subItem.text }}
                <a-icon type="link" />
              </a>
              <RouterLink v-else :to="link(subItem.link)">
                {{ subItem.text }}
              </RouterLink>
            </a-menu-item>
          </template>
        </a-sub-menu>
        <a-menu-item :key="link(item.link)" v-else>
          <a v-if="isExtlink(item.link)" :href="link(item.link)" target="_blank">
            {{ item.text }}
            <a-icon type="link" />
          </a>
          <RouterLink v-else :to="link(item.link)">
            {{ item.text }}
          </RouterLink>
        </a-menu-item>
      </template>
    </a-menu>
    <a v-if="repoLink" :href="repoLink" class="repo-link" target="_blank" rel="noopener noreferrer">
      <a-icon :type="repoLabel" />
    </a>
  </nav>
</template>

<script>
import { resolveNavLinkItem, isExternal, ensureExt } from '../util'

export default {
  name: 'NavLinks',

  data() {
    return {
      currentStyle: this.$store.state.navStyle,
      routesPath: ''
    }
  },
  created() {
    this.routesPath = JSON.stringify(
      this.$themeConfig.locales
        ? this.$themeConfig.locales[this.$localePath].nav
        : this.$themeConfig.nav
    )
  },
  methods: {
    isExtlink(path) {
      const Reg = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\*\+,;=.]+$/
      return Reg.test(path)
    },
    link(url) {
      url = typeof url === 'undefined' ? '' : url
      let _url = ensureExt(url)
      _url = _url.length === 5 && _url === '.html' ? this.geneKey() : _url
      return _url
    },
    geneKey(){
      return (Math.random().toString(36).substr(2,10) + (new Date()).getTime())
    },
    currentPath(path) {
      const array = this.routesPath
      if (array.indexOf(path) != -1) {
        return path
      }else{
        let _suffix = path.slice(-5)
        if (_suffix === '.html' ){
          let _path = path.replace('.html', '')
          if (array.indexOf(_path) != -1){
            return path
          }else{
            let _path = path.replace(/[^\/]+$/, '')
            return _path
          }
        }else{
          let _path = path.replace(/[^\/]+$/, '')
          return _path
        }
      }
    }
  },
  computed: {
    currentPage() {
      return [this.currentPath(this.$page.path)]
    },

    userNav() {
      return this.$themeLocaleConfig.nav || this.$site.themeConfig.nav || []
    },

    nav() {
      const { locales } = this.$site
      if (locales && Object.keys(locales).length > 1) {
        const currentLink = this.$page.path
        const routes = this.$router.options.routes
        const themeLocales = this.$site.themeConfig.locales || {}
        const languageDropdown = {
          text: this.$themeLocaleConfig.selectText || 'Languages',
          ariaLabel: this.$themeLocaleConfig.ariaLabel || 'Select language',
          items: Object.keys(locales).map(path => {
            const locale = locales[path]
            const text = (themeLocales[path] && themeLocales[path].label) || locale.lang
            let link
            // Stay on the current page
            if (locale.lang === this.$lang) {
              link = currentLink
            } else {
              // Try to stay on the same page
              link = currentLink.replace(this.$localeConfig.path, path)
              // fallback to homepage
              if (!routes.some(route => route.path === link)) {
                link = path
              }
            }
            return { text, link }
          })
        }
        return [...this.userNav, languageDropdown]
      }
      return this.userNav
    },

    userLinks() {
      const curNav = (this.nav || []).map(link => {
        return Object.assign(resolveNavLinkItem(link), {
          items: (link.items || []).map(resolveNavLinkItem)
        })
      })
      this.routesPath = JSON.stringify(curNav)
      return curNav
    },

    repoLink() {
      const { repo } = this.$site.themeConfig
      if (repo) {
        return /^https?:/.test(repo) ? repo : `https://github.com/${repo}`
      }
      return null
    },

    repoLabel () {
      if (!this.repoLink) return
      if (this.$site.themeConfig.repoLabel) {
        return this.$site.themeConfig.repoLabel
      }

      const repoHost = this.repoLink.match(/^https?:\/\/[^/]+/)[0]
      const platforms = ['github', 'gitlab']
      for (let i = 0; i < platforms.length; i++) {
        const platform = platforms[i]
        if (new RegExp(platform, 'i').test(repoHost)) {
          return platform
        }
      }

      return 'global'
    }
  }
}
</script>

<style lang="less">
@import '../styles/palette.less';

.nav-links {
  float: right;
  margin-right: 4rem;
  font-size: 1rem;

  .repo-link {
    color: inherit;
    font-size: 1.5rem;
    position: absolute;
    right: 1.7rem;
    top: 0;
    line-height: @navbarHeight;

    &:hover {
      color: @accentColor;
    }
  }
}

@media (max-width: @MQMobile) {
  .nav-links {
    float: none;
    margin-right: 0;

    .repo-link {
      display: none;
    }
    .ant-menu-inline,
    .ant-menu-vertical,
    .ant-menu-vertical-left {
      border: none;
    }
  }
}
</style>
