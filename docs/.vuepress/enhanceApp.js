/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */
import baiduAnalytics from 'vue-baidu-analytics'

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  Vue.use(baiduAnalytics, {
    router: router,
    siteIdList: [
      'e5dd40b7e3a2272384a85230955b9d80',
      '87bb30e7a161a8f2ab83d040396a0fee'
    ],
    isDebug: false
  });
};
