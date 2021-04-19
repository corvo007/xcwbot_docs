---
prev: ./whychooseus
next: ./saleactivity
---
# 赞助指南

::: warning 注意
赞助并使用本服务即代表您同意[《最终用户许可协议》](/EULA)。
:::

## 为什么选择我们?
[为什么选择我们?](/shop/whychooseus.html)

## 功能简介
<template>
  <div>
    <a-tabs default-active-key="1" :size="size" @change="callback">
      <a-tab-pane key="1" tab="会战版">
       会战版只有yobot的相关功能，包括带网页的会战管理系统和一系列的伤害统计图表等，能满足基本的会战需求，<b>适合只用于会战的人。</B></br>赞助<b>5.99元/月</b>即可使用这个Bot。
      </a-tab-pane>
      <a-tab-pane key="2" tab="会战实用版">
        标准版在会战功能之外加入了更多的实用功能，包括:jjc查询、rank表速查、日程表、会战排名、会战报告等，使得其能满足游戏过程中的大部分需求。<b>适合希望其不仅能用于会战，还能用于游戏的其他方面的人</B>。<br>赞助<b>14.99元/月</b>即可使用这个Bot。  
      </a-tab-pane>
      <a-tab-pane key="3" tab="娱乐版">
        娱乐版加入了大量的娱乐功能，如你问我答、pcr版的每日运势、网抑云语录、集卡游戏和大头菜市场等等。当然，还有一些神秘的隐藏功能(笑)。另外，为了功能的纯粹性，剥离了会战功能与大部分实用功能。<b>但是，考虑到部分群的实际需要，保留了竞技场查询功能。默认禁用，使用前请按照说明启用。</b>藉由使用本版本的Bot，可以满足大部分的娱乐需求。<b>适合只用于娱乐的人。</B><br>赞助<b>15.99元/月</b>即可使用这个Bot。
      </a-tab-pane>
      <a-tab-pane key="4" tab="终极版">
        终极版是<b>会战&实用版</b>与<b>娱乐版</b>的组合套装，既可以满足会战管理的需要，也可以满足在会战间隙的娱乐需求。<b>适合需求广泛，需要功能面面俱到的人。</B><br>赞助<b>17.99元/月</b>即可使用这个Bot。<b>(比单买两个版本劲省12.99元！)</b> 
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<template>
  <div>
    <a-tabs default-active-key="1" :size="size" @change="callback">
      <a-tab-pane key="1" tab="我之前从未使用过">
        <template>
  <div>
    <a-steps :current="current_new" @change="onChange_new">
      <a-step v-for="item in steps_new" :key="item.title" :title="item.title" :description="item.description" />
    </a-steps>
    <div class="steps-content" v-html="steps_new[current_new].content">
    </div>
    <div class="steps-action">
      <a-button v-if="current_new < steps_new.length - 1" type="primary" @click="next_new">
        下一步
      </a-button>
      <a-button
        v-if="current_new == steps_new.length - 1"
        type="primary"
      >
        结束
      </a-button>
      <a-button v-if="current_new > 0" style="margin-left: 8px" @click="prev_new">
        上一步
      </a-button>
    </div>
  </div>
</template>
<style scoped>
.steps-content {
  margin-top: 16px;
  border: 1px dashed #e9e9e9;
  border-radius: 6px;
  background-color: #fafafa;
  min-height: 200px;
  text-align: center;
  padding-top: 80px;
}
.steps-action {
  margin-top: 24px;
}
</style>
      </a-tab-pane>
      <a-tab-pane key="2" tab="我之前已经使用过了" force-render>
        <template>
  <div>
    <a-steps :current="current_old" @change="onChange_old">
      <a-step v-for="item in steps_old" :key="item.title" :title="item.title" :description="item.description" />
    </a-steps>
    <div class="steps-content" v-html="steps_old[current_old].content">
    </div>
    <div class="steps-action">
      <a-button v-if="current_old < steps_old.length - 1" type="primary" @click="next_old">
        下一步
      </a-button>
      <a-button
        v-if="current_old == steps_old.length - 1"
        type="primary"
      >
        结束
      </a-button>
      <a-button v-if="current_old > 0" style="margin-left: 8px" @click="prev_old">
        上一步
      </a-button>
    </div>
  </div>
</template>
<style scoped>
.steps-content {
  margin-top: 16px;
  border: 1px dashed #e9e9e9;
  border-radius: 6px;
  background-color: #fafafa;
  min-height: 200px;
  text-align: center;
  padding-top: 80px;
}
.steps-action {
  margin-top: 24px;
}
</style>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

## 赞助流程
<template>
  <a-steps direction="vertical" :current="0" >
    <a-step v-for='item in vertical_steps' :title='item.title' :subTitle='item.subTitle'>
    <template slot="description">
    <p v-show='item.id===0'>测试</p>
    </template>
    </a-step>
  </a-steps>
  
</template>





## 常见问题
### 我不会使用怎么办？
邀请Bot进群后，在群里面发送`帮助`即可获取使用手册。如果还有其他问题，请<b>首先仔细阅读使用手册</b>，然后阅读[常见问题解答](/guide/qa)，如实在不能解决，请联系我(2144671869)。

### 我原来的群解散了/我离开原来的群了，能把Bot转到其他群用吗？
你可以选择：


<template>
  <div>
    <a-tabs default-active-key="1" :size="size" @change="callback">
      <a-tab-pane key="1" tab="自助转移">
        <template>
  <div>
    <a-steps :current="current_auto" @change="onChange_auto">
      <a-step v-for="item in steps_auto" :key="item.title" :title="item.title" :description="item.description" />
    </a-steps>
    <div class="steps-content" v-html="steps_auto[current_auto].content">
    </div>
    <div class="steps-action">
      <a-button v-if="current_auto < steps_auto.length - 1" type="primary" @click="next_auto">
        下一步
      </a-button>
      <a-button
        v-if="current_auto == steps_auto.length - 1"
        type="primary"
      >
        结束
      </a-button>
      <a-button v-if="current_auto > 0" style="margin-left: 8px" @click="prev_auto">
        上一步
      </a-button>
    </div>
  </div>
</template>
<style scoped>
.steps-content {
  margin-top: 16px;
  border: 1px dashed #e9e9e9;
  border-radius: 6px;
  background-color: #fafafa;
  min-height: 200px;
  text-align: center;
  padding-top: 80px;
}
.steps-action {
  margin-top: 24px;
}
</style>
      </a-tab-pane>
      <a-tab-pane key="2" tab="联系维护组转移" force-render>
      <b>测试</b>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

### 我能更换到其他版本的Bot吗？
无论是哪一类Bot，均可更换为其他版本的Bot，<b>原Bot的剩余时长会按照90%的比例以优惠券形式冲抵新Bot的购买费用</b>。  
如需更换其他版本Bot，请私聊我(2144671869)，告知需要更换Bot。发送群号，需要更换的Bot的版本即可。

### 我赞助之后不满意，能退款吗？
因为我们已经在试用群中提供了充分、完善的试用服务，因此，<b>恕不退款</b>。  
但是，您可以转卖您的卡密，我们不反对您转卖您的卡密，您甚至还可以申请成为代理商。

### 那么赞助了Bot之后，售后服务是怎么样的呢？
Bot服务期间内:  
如果发生腾讯方面导致的冻结，<b>每冻结1天补偿2天时长</b>；  
由于维护团队失误而导致的bot无法使用，<b>每停用1天补偿3天时长</b>。  

并且，我们会定期进行维护，更新功能与修复功能bug。我们同样也欢迎您向我们(2144671869)提出问题或建议。

<script>
export default {
  data() {
    return {
      current_new: 0,
       current_old: 0,
       current_auto: 0,
      size: 'large',
      steps_new: [
        {
          title: 'First',
          description: 'description',
          content: 'First-content',
        },
        {
          title: 'Second',
          description: 'description',
          content: 'Second-content',
        },
        {
          title: 'Last',
          description: 'description',
          content: `
`,
        }],
        steps_old: [
        {
          title: 'First',
          description: 'description',
          content: 'First-content',
        },
        {
          title: 'Second',
          description: 'description',
          content: 'Second-content',
        },
        {
          title: 'Last',
          description: 'description',
          content: `
`,
        },
      ],
      steps_auto: [
        {
          title: '先决条件',
          description: '自助转移授权需要满足的条件',
          content: 'First-content',
        },
        {
          title: '生成转移码',
          description: '在转出群中atBot并发送指令',
          content: 'Second-content',
        },
        {
          title: '使用转移码确认转移',
          description: '私聊Bot并发送指令',
          content: `
`,
        },
      ],
      vertical_steps:[
          {
              id:0,
              title:'test',
              subTitle:'test'
          },
          {
              id:1,
              title:'test',
              subTitle:'test'
          },
          {
              id:2,
              title:'test',
              subTitle:'test'
          },
          {
              id:3,
              title:'test',
              subTitle:'test'
          }],
      };
  },
  methods: {
    callback(key) {
      console.log(key);
    },
    next_new() {
      this.current_new++;
    },
    next_old() {
      this.current_old++;
    },
    next_auto() {
      this.current_auto++;
    },
    prev_new() {
      this.current_new--;
    },
    prev_old() {
      this.current_old--;
    },
    prev_auto() {
      this.current_auto--;
    },
    onChange_old(current) {
      console.log('onChange:', current);
      this.current_old = current;
    },
    onChange_new(current) {
      console.log('onChange:', current);
      this.current_new = current;
    },
    onChange_auto(current) {
      console.log('onChange:', current);
      this.current_auto = current;
    },
  },
};
</script>