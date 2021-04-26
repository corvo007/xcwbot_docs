<template>
  <div class="theme-container">
    <div class="theme-antdocs-content">
      <h1>404 未找到页面</h1>

      <blockquote>{{ getMsg() }}</blockquote>

      <RouterLink to="/">
         回到首页
      </RouterLink>
    </div>
  </div>
</template>

<script>
const msgs = [
  `哎呀，这里什么都没有呢~`,
  `你在找什么呢？`,
  `要不看看网址对不对？`
]

export default {
  methods: {
    getMsg () {
      return msgs[Math.floor(Math.random() * msgs.length)]
    }
  }
}
</script>
