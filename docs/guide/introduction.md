---
prev : false
---
# 前言
<a-alert type="warning" message="提示" show-icon>
<template slot="description">
会战机器人只有<b>最基本</b>的功能，若需使用完整功能，请<a href="/hosting/introduction.html">托管机器人</a>。
</template>
</a-alert>

<b>欢迎您使用小仓唯Bot！</B>  
接下来，本手册将详细介绍本bot的各项功能。   
<b>本指南下一页链接位于本页面底部右侧，</b>索引位于页面左侧(PC端)或页面左上角(移动端)，搜索框位于页面右上方。此外，您可以点击左上角logo或文字返回指南首页。   
<b>您目前托管的私人机器人包括此处的所有功能。</b>  
如使用中遇到问题，可先查看[常见问题解答](/guide/qa)，如无法解答您的问题，欢迎向维护组咨询！

## 指令标记说明

1. `(@bot)`标记代表该命令需要at机器人

2. `(管理员/维护组)`标记表示功能需要管理员或维护组权限

3. `(自动)`标记表示启用后无需手动触发，会自动执行，常见于订阅类功能

4. `[方括号]`表示其中参数是可选的，输入时<b>无需输入方括号</B>  

5. 未在`[方括号]`的参数参数是必选的，必须输入

6. 以`/`分割的命令代表该功能可以由多个指令触发，输入一个即可

7. 具有以下标记的功能接入了金币系统，具体请查看[金币系统使用指南](/guide/scoresystem.html)：  
    <b>点歌</B><Badge text="花费金币" type="warning"/><Badge text="花费金币(限额用完时)" type="warning"/> <Badge text="获得金币" type="tip"/>

8. <b>请不要漏掉命令中的空格或其他分隔符(如`*`)！</B>

9.  <b>如无特殊说明，所有功能仅群聊可用，所有服务均已启用</B>

## 群服务启禁用说明

::: warning 注意
会战版不能唤出服务列表，也不能对服务进行管理
:::

::: tip 提示
<p>只有管理员以上权限才能启用/禁用服务</p>
:::

在群聊中发送`服务列表`以查看所有服务，发送`禁用/启用 服务名`以禁用/启用某个服务。发送`禁用全部/启用全部`可以禁用或启用全部服务。<b>请注意不要输入错误的指令或服务名，服务名请以具体功能中说明为准！</B>

<b>例如:</b>禁用 AI闲聊 启用 老婆

<!--
<script>
export default {
  methods: {
    showConfirm() {
      this.$confirm({
        title: '娱乐版&会战实用版转型通知',
        content: h => <b>除会战版以外的所有机器人已经全面转向托管模式，此后不再维护之前的机器人，请点击“确定”前往了解详情以及具体操作，点击“取消”留在当前页面。</b>,
        onOk() {
          window.location.href="/hosting/introduction.html";
        },
        onCancel() {
        },
        okText: '确定',
        cancelText: '取消',
      });
    },
},
mounted() {
  if (document.readyState === 'complete') this.showConfirm()
  else document.addEventListener('load', () => this.showConfirm())
  },
}
</script>
!-->