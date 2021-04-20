<template>
  <main class="page">
    <slot name="top" />

    <Content class="theme-antdocs-content" />
    <PageEdit />

    <PageNav v-bind="{ sidebarItems }" />

    <template>
  <div>
    <a-back-top />
  </div>
</template>

    <slot name="bottom" /><div class="footinfo">Copyright © 2020-2021 xcwbot.com. All Rights Reserved.</div>
  </main>
</template>

<script>
import PageEdit from '@theme/components/PageEdit.vue'
import PageNav from '@theme/components/PageNav.vue'

export default {
  components: { PageEdit, PageNav },
  props: ['sidebarItems']
}
</script>

<style lang="less">
@import '../styles/palette.less';
@import "../styles/wrapper.less";
.page {
  padding-bottom: 2rem;
  display: block;
}
.footinfo {
  position: fixed;
  margin-top: 20px;
  bottom: 0;
  color:#FFFFFF;
  background-color: #3eaf7c;
  font-size: 12px;
  text-align: center;
  height: 25px;
  width: 100%;
  line-height: 2;
}
@media (max-width: @MQMobile) {
  .page {
    margin-top: -@navbarHeight;
  }
}
</style>
