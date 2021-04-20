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



## 赞助流程
<template>
  <a-steps direction="vertical" :current="4" >
    <a-step v-for='item in vertical_steps' :title='item.title' :subTitle='item.subTitle'>
      <a-icon slot="icon" :type="item.icon" />
    <template slot="description">
      <div v-show="item.id===0">
        <a-tabs default-active-key="1" :size="size" @change="callback">
          <a-tab-pane key="1" tab="会战版">
            会战版只有yobot的相关功能，包括带网页的会战管理系统和一系列的伤害统计图表等，能满足基本的会战需求，<b>适合只用于会战的人。</B></br>赞助<b>5.99元/月</b>即可使用这个机器人。
          </a-tab-pane>
          <a-tab-pane key="2" tab="会战实用版">
            标准版在会战功能之外加入了更多的实用功能，包括:jjc查询、rank表速查、日程表、会战排名、会战报告等，使得其能满足游戏过程中的大部分需求。<b>适合希望其不仅能用于会战，还能用于游戏的其他方面的人</B>。<br>赞助<b>14.99元/月</b>即可使用这个机器人。
          </a-tab-pane>
          <a-tab-pane key="3" tab="娱乐版">
            娱乐版加入了大量的娱乐功能，如你问我答、pcr版的每日运势、网抑云语录、集卡游戏和大头菜市场等等。当然，还有一些神秘的隐藏功能(笑)。另外，为了功能的纯粹性，剥离了会战功能与大部分实用功能。<b>但是，考虑到部分群的实际需要，保留了竞技场查询功能。默认禁用，使用前请按照说明启用。</b>藉由使用本版本的机器人，可以满足大部分的娱乐需求。<b>适合只用于娱乐的人。</B><br>赞助<b>15.99元/月</b>即可使用这个机器人。
          </a-tab-pane>
          <a-tab-pane key="4" tab="终极版">
            终极版是<b>会战&实用版</b>与<b>娱乐版</b>的组合套装，既可以满足会战管理的需要，也可以满足在会战间隙的娱乐需求。<b>适合需求广泛，需要功能面面俱到的人。</B><br>赞助<b>17.99元/月</b>即可使用这个机器人。<b>(比单买两个版本劲省12.99元！)</b>
          </a-tab-pane>
        </a-tabs>
      </div>
        <div v-show="item.id===1">
          <a-tabs default-active-key="1" :size="size" @change="callback">
            <a-tab-pane key="1" tab="自助赞助">
              <a-alert type="info" show-icon >
              <template slot="message">商店目前支持以下支付方式：<a-icon type="alipay" :style="{ fontSize: '20px' }"/> </br>如果您希望使用 <a-icon type="wechat" :style="{ fontSize: '20px' }" /> <a-icon type="qq" :style="{ fontSize: '20px' }" /> 进行赞助或您身处境外，请转到“联系维护组赞助”。</template>
              </a-alert>
              <p>决定了赞助的机器人的类型之后，就请点击下方按钮打开商店页面，然后按流程完成赞助。若下方图片过小，您可以点击图片，便可以放大。</p>
              <a-button type="primary">
                <a href="http://shop.xcwbot.com" target="_blank">打开商店页面</a>
              </a-button>
              <template>
                <div>
                  <a-steps :current="current_shop" @change="onChange_shop">
                    <a-step v-for="item in steps_shop" :key="item.title" :title="item.title" :description="item.description" />
                  </a-steps>
                  <div class="steps-content">
                    <p v-html="steps_shop[current_shop].content"></p>
                    <img :src="steps_shop[current_shop].image" :height="steps_shop[current_shop].image_height"/>
                  </div>
                  <div class="steps-action">
                    <a-button v-if="current_shop < steps_shop.length - 1" type="primary" @click="next_shop">
                      下一步
                    </a-button>
                    <a-button v-if="current_shop == steps_shop.length - 1" type="primary">
                      结束
                    </a-button>
                    <a-button v-if="current_shop > 0" style="margin-left: 8px" @click="prev_shop">
                      上一步
                    </a-button>
                  </div>
                </div>
              </template>
            </a-tab-pane>
            <a-tab-pane key="2" tab="联系维护组赞助" force-render>
              <a-alert type="info" show-icon>
                <template slot="message">如您联系维护组进行赞助，可使用以下支付方式：
                  <a-icon type="alipay" :style="{ fontSize: '20px' }" />  <a-icon type="wechat" :style="{ fontSize: '20px' }" /> <a-icon type="qq" :style="{ fontSize: '20px' }" />
                </template>
              </a-alert>
              首先，请点击下方按钮<b>联系维护组</b>。<br><a-button type="primary">
                <a href="/about/#%E8%81%94%E7%B3%BB%E6%88%91%E4%BB%AC" target="_blank">联系维护组</a>
              </a-button><br>然后，您只需要向维护组提供您需要赞助的<b>版本</b>和<b>时长</b>以及想使用的<b>支付方式</b>。<br>之后，维护组便会返回一张支付二维码。<br><b>支付后</b>，您会同自助赞助一样得到一个<b>卡密</b>，请照下个步骤进行激活。
            </a-tab-pane>
          </a-tabs>
        </div>
    </template>
    </a-step>
  </a-steps>
</template>




## 常见问题
### 我不会使用怎么办？
邀请机器人进群后，在群里面发送`帮助`即可获取使用手册。如果还有其他问题，请<b>首先仔细阅读使用手册</b>，然后阅读[常见问题解答](/guide/qa)，如实在不能解决，请联系我(2144671869)。

### 我原来的群解散了/我离开原来的群了，能把机器人转到其他群用吗？
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

### 我能更换到其他版本的机器人吗？
无论是哪一类机器人，均可更换为其他版本的机器人，<b>原机器人的剩余时长会按照90%的比例以优惠券形式冲抵新机器人的购买费用</b>。  
如需更换其他版本机器人，请私聊我(2144671869)，告知需要更换机器人。发送群号，需要更换的机器人的版本即可。

### 我赞助之后不满意，能退款吗？
因为我们已经在试用群中提供了充分、完善的试用服务，因此，<b>恕不退款</b>。  
但是，您可以转卖您的卡密，我们不反对您转卖您的卡密，您甚至还可以申请成为代理商。

### 那么赞助了机器人之后，售后服务是怎么样的呢？
机器人服务期间内:  
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
      current_shop:0,
      size: 'large',
      steps_shop: [
        {
          title: '选择类型和时长',
          content: '<b>打开页面后，首先选择赞助类型和赞助时长，此处以会战版+月卡为例</b><br/>',
          image:'https://image.pcrbotlink.top/shopping-1.jpg',
          image_height:''
        },
        {
          title: '填写相关信息', 
          content: '<b>在此您需要填写联系邮箱，用来收取卡密；并直接在“查询密码”框内输入一个密码用于之后订单的查询。此外，如果您有优惠券，可以填入“优惠券”栏。</b><br/>',
          image: 'https://image.pcrbotlink.top/shopping-2.jpg',
          image_height:'400'
        },
        {
          title: '选择支付方式',
          content: '<b>确认填写的各项信息无误后，选择一种支付方式付款。</b><br/>',
          image: 'https://image.pcrbotlink.top/shopping-3.jpg',
          image_height:''
        },
        {
          title: '完成赞助并获得卡密',
          content: '<b>付款成功后，会自动跳转到提取卡密页面。若没有跳转，请</b><a href="https://shop3.xcwbot.com/#/record" target="_blank">查询订单</a><b>获取卡密。之后，请按照下个步骤所述将卡密激活。</b><br/>',
          image: 'https://image.pcrbotlink.top/shopping-4.jpg',
          image_height:'400'
        },
      ],
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
          description: '在转出群中at机器人并发送指令',
          content: 'Second-content',
        },
        {
          title: '使用转移码确认转移',
          description: '私聊机器人并发送指令',
          content: `
`,
        },
      ],
      vertical_steps:[
          {
              id:0,
              title:'对比选择',
              icon:'read',
              subTitle:'了解版本区别并选择适合的机器人'
          },
          {
              id:1,
              title:'完成赞助并获得卡密',
              icon:'money-collect',
              subTitle:'自助赞助或联系维护组赞助'
          },
          {
              id:2,
              title:'激活卡密',
              icon:'user-add',
              subTitle:'私聊机器人或在原有群中激活'
          },
          {
              id:3,
              title:'最后一步？',
              icon:'smile',
              subTitle:'Have Fun！'
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
    next_shop() {
      this.current_shop++;
    },
    prev_shop() {
      this.current_shop--;
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
    onChange_shop(current) {
      console.log('onChange:', current);
      this.current_shop = current;
    },
  },
};
</script>