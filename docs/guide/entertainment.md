---
prev: ./tools
next: ./qa
---
# 娱乐功能

<a-alert type="warning" message="提示" show-icon>
<template slot="description">
目前<b>除会战版外</b>的所有版本<b>(包括会战实用版)</b>皆已全面转为托管模式，如果您需要一个开箱即用的会战机器人，请照<a
            href="/shop/guide.html">“赞助指南”</a>赞助并使用。这个机器人只有<b>最基本</b>的功能，若需使用完整功能，请<a href="/announcement/hosting.html">托管机器人</a>。
</template>
</a-alert>

## 金币系统
::: warning 注意
禁用这个服务仅仅是不能用下面三个指令，其余的功能不受影响。
:::
<b>相关服务:金币系统</b>
指令|说明
:--|:--|:--
查询金币数|查询自己的金币数
送点金币 @某人 金币数|赠送他人金币可用
金币日志|查询金币变动的详情

## PCR模拟抽卡<Badge text="获得金币" type="tip"/><Badge text="花费金币" type="warning"/>
<b>相关服务:PCR抽卡</b>
指令|说明
:--|:--|:--
小仓唯单抽|	
小仓唯十连|	
小仓唯来一井|	45000钻，300抽
查看卡池|	查看当期up及出率
切换卡池|	可切换B/台/日服卡池

## 邦邦抽卡
<b>相关服务:邦邦抽卡</b>
指令|说明
:--|:--|:--
邦邦十连 (卡池编号)|十连抽卡模拟，若未输入卡池编号则随机选取
邦邦天井 (卡池编号) |天井抽卡模拟
查询邦邦卡池 (卡池编号) |查询卡池信息

## Arcaea个人信息查询
<b>相关服务:Arcaea</b>
指令|说明
:--|:--|:--
ds 曲名/等级|查询定数
arc 玩家名/好友码|查询玩家的ptt、r10/b30和最近游玩的歌曲
best 玩家名/好友码 n|查询玩家ptt前n的歌曲(n≤10)

## 切噜语翻译
<b>相关服务:切噜语转换</b>
指令|说明
:--|:--|:--
切噜一下|	转换为切噜语
切噜～♪切啰巴切拉切蹦切蹦|	切噜语翻译

## 签到<Badge text="获得金币" type="tip"/>
<b>相关服务:签到</b>
指令|说明
:--|:--|:--
小仓唯签到|	给主さま盖章章(随机图样哦)

## 运势(抽签)
<b>相关服务:签到</b>
指令|说明
:--|:--|:--
运势列表|查看当前可用运势列表  
抽签/运势 [主题名]|抽一发！  

## 文案写手
<b>相关服务:文案写手</b>
指令|说明
:--|:--|:--
营销号生成器|	使用`营销号 主体 事件 另一种说法`命令生成
狗屁不通生成器|	使用`狗屁不通 主题`命令生成
记仇表情包生成器|	使用`记仇 天气 主题`命令生成
无中生友|	使用`我朋友说xxx(@某人)`命令生成</B>(at人使用指定人的头像，不at随机选择)</B><br>例如:我朋友说他好了@张三<br>我朋友说他好了
舔狗日记|	使用`日记(@某人)`命令生成</B>(at人使用指定人的头像，不at随机选择)</B><br>例如:@张三日记<br>日记

## 热门测试  
<b>相关服务:shindan</b>    
指令|说明
:--|:--|:--
<b>(@bot)</b> 测一测 测试名| 为自己进行测试   
看看测一测列表|查看当前启用的测试列表   

## 掷骰子
<b>相关服务:骰子</b>
指令|说明
:--|:--|:--
.r|	掷骰子(默认1d100)
.r 3d12|	掷3次12面骰子并将每一次掷出的点数相加

## 你问我答
<b>相关服务:你问我答</b>
指令|说明
:--|:--|:--
我问A你答B|	设置自定义答复(仅对设置人有效)
<b>(管理员)</b>大家问/有人问A你答B|	设置自定义答复(对所有人有效)
不要回答 问题/id|	删除自定义答复
全部问答|	查看本群所有自定义答复
我的问答|查看我设置的问答

::: tip 详细规则  
如果一个问题既有我问又有大家问，那么优先回答我问；  
如果一个问题有多个回答，那么随机抽取回答。
:::

## 精 致 睡 眠
<b>相关服务:睡眠套餐</b>
::: tip 提示
本功能需要bot是当前群的管理员，否则不会生效
:::  
指令|说明
:--|:--|:--
精致睡眠|	8小时精致睡眠
给我来一份精致昏睡下午茶套餐|	叫114514杯先 辈 特 调 红 茶

## 群空调
<b>相关服务:群空调</b>
指令|说明
:--|:--|:--
开空调|	打开空调(第一次使用时会自动安装空调)
关空调|	关闭空调
当前温度|	查看当前风速、设定温度、环境温度
设置温度 温度|	设置空调温度
设置风速 1/2/3 (或者低/中/高)|	设置空调风速(共有三档)
设置环境温度 温度|	设置环境温度
设置环境温度 温度|	设置环境温度
升级空调|	升级空调(家用空调→中央空调)
降级空调|	降级空调(中央空调→家用空调)
空调类型|	查看空调类型(家用空调/中央空调)

## 猜头像<Badge text="获得金币" type="tip"/>
<b>相关服务:猜头像/猜从者/猜干员</b>
指令|说明    
:--|:--|:--  
猜头像/猜从者/猜干员|	猜猜机器人随机发送的头像的一小部分来自哪位角色  
猜头像群排行|	显示猜头像小游戏猜对次数的群排行榜(只显示前十名)  
<b>(管理员)</b>重置猜头像|重置游戏状态(卡住时用)  
<b>(管理员)</b>重置猜干员|重置游戏状态(卡住时用)  
<b>(管理员)</b>重置猜从者|重置游戏状态(卡住时用)   

## 猜角色<Badge text="获得金币" type="tip"/>
<b>相关服务:猜角色</b>
指令|说明
:--|:--|:--
猜角色|	猜猜机器人随机发送的文本在描述哪位角色
猜角色群排行|	显示猜角色小游戏猜对次数的群排行榜(只显示前十名)
<b>(管理员)</b>重置猜角色|重置游戏状态(卡住时用) 

## PCR记忆小游戏<Badge text="获得金币" type="tip"/><Badge text="花费金币" type="warning"/>
<b>相关服务:PCR完美配对、PCR神经衰弱</b>
指令|说明
:--|:--|:--
完美配对|	开始完美配对游戏
完美配对排行榜|	显示完美配对小游戏分数排行榜
神经衰弱|	开始神经衰弱游戏
神经衰弱排行榜|	显示神经衰弱小游戏分数排行榜

::: tip 完美配对规则
4×4方格内藏有16种不同图案，初始不显示其内容。每次机器人会随机展示其中8个位置的图案，持续若干秒，共展示3轮，请记住各个图案所在的位置。之后机器人会随机提问一种图案，请回答这个图案在4×4方格中的位置编号。
:::

::: tip 神经衰弱规则
4×4方格中放置了8种不同的图案，每种图案共两张。机器人首先会给几秒钟时间记忆，然后把全部图片翻面并随机翻开其中一张。玩家需要在规定时间内回答另一张相同图案所在位置的编号。
:::

## 抽:elephant:圣经转换:seven:
<b>相关服务:抽象话转换</b>
指令|说明
:--|:--|:--
抽象一下 一句话|	转换为抽象话(标题上的就是)
我佛辣 一句话|	转换为深度抽象话

## 表情包生成器
<b>相关服务:表情包生成</b>
指令|说明
:--|:--|:--
选图列表|查看可选的底图
生成表情 序号 文本|序号是选图列表显示的图片序号，空格不可省略
生成表情 图片名 文本|以图片名指定底图
生成表情 文本|以默认表情(栞)生成表情包
选图 序号|设置自己的默认底图
|选图 图片名|设置自己默认底图

::: tip 提示  
图片序号可能会随着新表情添加而改变。图片名一般不会变化。  
:::  

## 弔图生成器
<b>相关服务:想要5000兆元、高情商、鲁迅说、黑黄图生成</b>
指令|说明
:--|:--|:--
5k 顶部文字 底部文字|生成想要5000兆元风格图片    
高情商 文字 低情商 文字|生成高低情商图片  
鲁迅曾经说过 文字|生成鲁迅说图片  
PH 左侧文本 右侧文本|生成ph风格的logo  

## 涩图&搜图<Badge text="花费金币(限额用完时)" type="warning"/>
<b>相关服务:setu(涩图)、以图搜番(番剧搜索)</b>
指令|说明
:--|:--|:--
来张[关键词]涩图|	获取一张(指定关键字的)涩图
提取图片 p站id| 提取指定id的图片，本地如有将直接发送，否则将直接给出链接
<b>(@bot)</b> 图片|搜索图片的出处(泛用版，番剧类图片使用"搜番"更为准确)
搜番 图片|搜索图片的出处(搜索范围限于番剧)

::: warning 注意
1.每次发送涩图之后冷却时间120s(2min)。   
2.没有R18，以后也不会有。  
3.图片搜索的功能限于<b>二次元番剧完整截图/插画</b>。  
4.可能会有部分关键字的涩图因tx的风控无法发送。   
:::

## #看看群友xp<Badge text="获得金币" type="tip"/><Badge text="花费金币" type="warning"/>
<b>相关服务:cxqyxp</b>
指令|说明
:--|:--|:--
fxwdxp 图片(一条消息内发出)|分享你的xp
kkqyxp|看看群友xp
点赞/踩 图片id|评价这张图片
xp排行榜|看看大伙喜欢啥(<s>白毛</s>)

::: tip 说明
- 每上传一张可以获得50金币；
- 一次最多上传10张图片；
- 一天最多上传20张图片；
- 看一张需要75金币；
- 看排行榜需要300金币；
- 看一张会给上传者10金币；
- 每个赞上传者会得到25金币；
- 每个踩扣除上传者30金币；
- 一张图片收到10个或者更多的踩就会从图库里面删除；
- 一张图片收到10个或者更多的赞就会变为热门图片；
- 上传的图片从图库里面删除时会扣除上传者300金币；
- 有5张被删除的图片时，上传者将会被禁止上传图片。
:::


##  老婆！<Badge text="花费金币" type="warning"/>
<b>相关服务:老婆</b>
::: warning 注意！
1.如果你的金币数不足以支付老婆的日常花费，老婆就会和你分手(目前如此)。  
2.当老婆好感度降至零以下时，会被强制分手并扣除比平时高的分手费。
:::
指令|说明
:--|:--|
要老婆|拥有老婆会产生日常花费，每日花费 好感度*2 金币。
老婆骂我|不花费金币，可以随机增加1~5点好感度(每天最多增加5次好感度)	
老婆的个人信息	|
结婚|好感值100以上才可结婚，需要花费金币		
我的渣男值|	达到20以上之后不能再要新的老婆
情话|花费金币，可以随机增加1~5点好感度(每天最多增加5次好感度)
分手|分手需要花费金币，且渣男值+1
重新做人|清零渣男值，重新做人


## 点歌<Badge text="花费金币" type="warning"/>
<b>相关服务:点歌</b>
指令|说明
:--|:--|:--
点歌 oath sign|	点一首歌
选择 0|	从点歌结果中选择一首

## PCR集卡小游戏<Badge text="获得金币" type="tip"/><Badge text="花费金币" type="warning"/>
<b>相关服务:PCR集卡</b>
指令|说明
:--|:--|:--
集卡|	随机抽一次卡
查看仓库[@某人]|	查看自己或指定人的仓库、卡片收集情况和排名
合成 卡片1昵称 卡片2昵称|	献(合)祭(成)两张卡片以获得一张新的卡片。如是(超)稀有卡片请在卡片昵称前加上`(超)稀有`二字，如`稀有黑猫/超稀有黑猫`
一键合成 稀有度1 稀有度2 [合成轮数]|一键进行若干轮`稀有度1`和`稀有度2`的卡片合成(每张卡片会自动保留1张)。若不填合成轮数，则合成尽可能多的轮次。稀有度指`普通`，`稀有`或`超稀有`
赠送 @某人 赠送的卡片名|将自己的卡片赠予别人
交换 欲交换卡昵称 @某人 欲给出卡昵称|	向某人发起卡片交换请求，用自己的卡片交换他的卡片。同样，如是(超)稀有卡片请在卡片昵称前加上`(超)稀有`二字。
确认交换|	收到换卡请求后一定时间内输入这个指令可完成换卡。

::: tip 注:
1.单次抽取抽中稀有卡的概率是8%，而抽中超稀有卡的概率是4%；    
2.每抽20张卡必出稀有卡或超稀有卡一张，每抽150张卡必出超稀有卡一张；  
3.每次抽取有几率爆出不止一张卡片；  
4.一键合成出现稀有、超稀有卡的概率较普通合成略低；  
5.使用一键合成时，所指定稀有度的每张卡片至少要有两张；      
:::

## PCR午间音乐
<b>相关服务:PCR午间音乐</b>
指令|说明
:--|:--|:--
来点音乐|随机推送一首公主连结相关音乐|
来点音乐 关键词|寻找活动名/歌曲名含有关键词的音乐并推送|

## 惠惠的爆裂魔法
<b>相关服务:爆裂魔法</b>
指令|说明
:--|:--|:--
爆裂魔法/爆烈魔法|让惠惠来一发爆裂魔法吧！
<b>(@bot)</b>补魔|又能来一发了呢~

## 原神查询&娱乐
<b>相关服务:原神丘丘语翻译、原神帮助、原神抽卡、原神神瞳信息查询、原神资源图</b>
<template>
   <div>
      <a-collapse>
         <a-collapse-panel key="1" header="点击展开功能说明">
            <table>
               <tr>
                  <td><b>指令</b></td>
                  <td><b>说明</B></td>
               </tr>
               <tr>
                  <td colspan=2>
                     <center><b>原神抽卡</b></center>
                  </td>
               </tr>
               <tr>
                  <td>@bot相遇之缘</td>
                  <td>10连抽卡，一天限10次</td>
               </tr>
               <tr>
                  <td>@bot纠缠之缘</td>
                  <td>90连抽卡，一天限3次</td>
               </tr>
               <tr>
                  <td>@bot原之井</td>
                  <td>180连抽卡，一天限1次</td>
               </tr>
               <tr>
                  <td>原神卡池</td>
                  <td>查看当前UP池</td>
               </tr>
               <tr>
                  <td>原神卡池切换</td>
                  <td>切换其他原神卡池</td>
               </tr>
               <tr>
                  <td colspan=2>
                     <center><b>丘丘语翻译</b></center>
                  </td>
               </tr>
               <tr>
                  <td>丘丘一下 丘丘语句</td>
                  <td>翻译丘丘语，注意这个翻译只能把丘丘语翻译成中文，不能反向</td>
               </tr>
               <tr>
                  <td>丘丘词典 丘丘语句</td>
                  <td>查询丘丘语句的单词含义</td>
               </tr>
               <tr>
                  <td colspan=2>
                     <center><b>找神瞳</b></center>
                  </td>
               </tr>
               <tr>
                  <td>找风神瞳 神瞳编号</td>
                  <td>让机器人发送风神瞳的位置，神瞳编号为可选参数，不写编号机器人会随机一个编号，风可以换成岩来找岩神瞳</td>
               </tr>
               <tr>
                  <td>找到神瞳了 神瞳编号</td>
                  <td>让机器人记录这个神瞳编号，以后机器人不会给你发送这个编号</td>
               </tr>
               <tr>
                  <td><b>(@bot)</b> 删除找到神瞳 神瞳编号</td>
                  <td>在你已经找到的神瞳记录里删除这个编号</td>
               </tr>
               <tr>
                  <td><b>(@bot)</b> 重置风神瞳找到记录</td>
                  <td>删除所有风神瞳的找到记录，这个指令会有二次确认，风可以换成岩来重置岩神瞳的记录</td>
               </tr>
               <tr>
                  <td><b>(@bot)</b> 找到多少神瞳了</td>
                  <td>查看当前你找到多少神瞳了</td>
               </tr>
               <tr>
                  <td><b>(@bot)</b> 没找到的风神瞳</td>
                  <td>查看没有找到的风神瞳地图位置和编号</td>
               </tr>
               <tr>
                  <td colspan=2>
                     <center><b>资源位置查询</b></center>
                  </td>
               </tr>
               <tr>
                  <td>资源查询</td>
                  <td>查询XXX的位置图，XXX是资源的名字</td>
               </tr>
               <tr>
                  <td>原神资源列表</td>
                  <td>查询所有的资源名称</td>
               </tr>
               <tr>
                  <td colspan=2>
                     <center><b>圣遗物收集</b></center>
                  </td>
               </tr>
               <tr>
                  <td>原神副本</td>
                  <td>查询当前有哪些副本，掉落哪个套装</td>
               </tr>
               <tr>
                  <td>刷副本 副本名称</td>
                  <td>刷一次副本，可获得狗粮点数和圣遗物</td>
               </tr>
               <tr>
                  <td>查看圣遗物仓库 X</td>
                  <td>查询仓库第X页有哪些圣遗物</td>
               </tr>
               <tr>
                  <td>强化圣遗物X级 Y</td>
                  <td>把仓库编号为X的圣遗物强化Y级</td>
               </tr>
               <tr>
                  <td>圣遗物洗点 X</td>
                  <td>把仓库编号为X的圣遗物洗点，洗点后返还50%的强化点数，强化等级降为0，全属性重新随机</td>
               </tr>
               <tr>
                  <td>圣遗物详情 X</td>
                  <td>查看圣遗物详情</td>
               </tr>
               <tr>
                  <td>转换狗粮 X</td>
                  <td>把仓库编号为X的圣遗物销毁转化为狗粮，会返还80%狗粮点数</td>
               </tr>
               <tr>
                  <td>查看体力值</td>
                  <td>查看自己体力值</td>
               </tr>
               <tr>
                  <td colspan=2>
                     <center><b>原神黄历</b></center>
                  </td>
               </tr>
               <tr>
                  <td>原神黄历</td>
                  <td>查看今天的黄历</td>
               </tr>
               <tr>
                  <td>开启/关闭原神黄历提醒</td>
                  <td>开启或关闭本群的每日黄历提醒</td>
               </tr>
               <tr>
                  <td colspan=2>
                     <center><b>原神每日材料提醒</b></center>
                  </td>
               </tr>
               <tr>
                  <td>今日武器突破材料</td>
                  <td>查看今日武器突破材料</td>
               </tr>
               <tr>
                  <td>今日角色天赋材料</td>
                  <td>查看今日角色天赋材料</td>
               </tr>
               <tr>
                  <td>今日武器突破材料</td>
                  <td>查看今日武器突破材料</td>
               </tr>
               <tr>
                  <td>今日材料</td>
                  <td>查看今天的武器突破材料和角色天赋材料</td>
               </tr>
               <tr>
                  <td>开启/关闭原神每日素材提醒</td>
                  <td>开启或关闭本群的每日素材提醒</td>
               </tr>
            </table>
         </a-collapse-panel>
      </a-collapse>
   </div>
</template>

## 原神玩家信息卡片
<b>相关服务:原神玩家信息卡片</b>
|指令|说明|
|:-----|:-----|
原神个人信息|查询绑定的玩家信息
原神绑定 uid|绑定一个uid<br><b>(uid指的是米游社的uid，非游戏内的uid)</b>
原神解绑|解绑这个uid

## 海 豹 杀 手<Badge text="花费金币" type="warning"/>
::: tip 提示
本功能仅对PCR有效。另外，使用前按照下方说明启用功能。
:::
<b>相关服务:海豹杀手</b>
|指令|说明|
|:-----|:-----|
|启用海豹杀手 海豹判定阈值|在当前群启用海豹杀手插件。如果不输入参数，默认阈值是100抽，小于100抽出货的均判定为海豹。|
|禁用海豹杀手|在当前群禁用海豹杀手插件|

## RUA群友
<b>相关服务:Rua</b>
| 指令                 | 说明                                                     |
| ---------------------- | -------------------------------------------------------- |
| rua/Rua/搓@群友        | 发送一张搓群友头像的gif图片 |
::: warning 注意
无法生成目标头像是完全透明的gif。
:::

## 接头霸王
<b>相关服务:接头霸王</b>
|指令|说明|
|:-----|:-----|
接头1 图片|对三次元人物接头
接头2 图片|对二次元人物接头
接头 图片|使用默认模式接头，即二次元人物模式
::: warning 注意
耗时较长，请耐心等候一会。
:::

## 大头菜市场<Badge text="花费金币" type="warning"/><Badge text="获得金币" type="tip"/>
<b>相关服务:大头菜市场</b>
::: danger 风险提示
<b>大头菜交易可能获得比较高的收益，但也存在比较大的风险，请您根据自身的风险承受能力，审慎作出交易决定。</b>
:::
<template>
   <div>
      <a-collapse :bordered="false">
         <a-collapse-panel key="1" header="交易规则介绍(点击以展开)" style="background:#F6FFED">
            <ol>
               <li>每周<b>星期天11:00~20:00</b>可以<b>购买</b>大头菜，而每周<b>星期一到星期六11:00~20:00</b>可以<b>卖掉、借入、归还</b>大头菜。 </li>
               <li>大头菜的价格<b>每半个小时</b>更新一次，<b>非交易时段不更新</b>。 </li>
               <li>如果你在上周日买的大头菜在<b>星期六结束交易</b>之后仍然没有卖出，则会<b>坏掉</b>，坏掉的大头菜价值<b>非常低</b>。</li>
               <li>借入的大头菜请在<b>本周六结束交易</b>之前归还，未还的部分会被<b>强制归还</b>并加收<b>10%</b>逾期金。 </li>
               <li><b>借入</b>大头菜时需要满足以下<b>所有</b>条件： </br>
                  <ul>
                     <li>当前<b>所有</b>借出的大头菜数量与拟借出的大头菜数量合计不超过<b>25000</b>株； </li>
                     <li>借入大头菜后，当前自己借入大头菜的总数<b>不超过</b>1000株；</li>
                     <li>在交易时间内且<b>不是</b>星期天； </li>
                     <li><b>不</b>持有大头菜；</li>
                     <li>拥有相当于拟借出大头菜现值<b>80%</b>的金币。</li>
                  </ul>
               </li>
               <li><b>归还</b>大头菜需要满足以下条件<b>之一</b>：</br>
                  <ul>
                     <li>拥有相当于拟归还大头菜<b>现值</b>的金币；</li>
                     <li>持有大头菜数量<b>大于或等于</b>拟归还大头菜数量；</li>
                     <li>持有大头菜数量不足以归还，但拥有相当于持有大头菜数量与拟归还大头菜<b>数量之差</b>的大头菜之<b>价值</b>的金币</li>
                  </ul>
               </li>
               <li>灵感及主要设计来自于游戏《集合吧！动物森友会》。</li>
               <li>以上所述日期及时间以北京时间(UTC+8)为准。</li>
            </ol>
         </a-collapse-panel>
      </a-collapse>
   </div>
</template>


|指令|说明|
|:-----|:-----|
查看价格 大头菜| 查看大头菜的价格  
我的仓库| 查看我的仓库中的物品  
本日/周/月走势| 查看本日/周/月的大头菜价格走势  <Badge text="1" type="tip"/>
买入 大头菜 数量| 购买指定数量的大头菜(数量填`all`代表最大数量)  
卖出 大头菜 数量| 卖掉指定数量的大头菜(数量填`all`代表全部)  
借入 大头菜 数量|借入指定数量的大头菜
归还 大头菜 数量|归还指定数量的大头菜
::: tip 走势图说明
1.<b>均值</b>：是指在一组数据中所有数据之和再除以这组数据的个数，它是反映数据<b>集中趋势</b>的一项指标。  
2.<b>极差</b>：是指最大值与最小值之间的差距，它是用来评价一组数据的<b>总体离散度</b>的一项指标。  
3.<b>标准差</b>：是指离均差平方的算术平均数的算术平方根，它反映组内<b>个体间的离散程度</b>。  
4.折线上下的<b>灰色竖线</b>：是<b>误差线</b>，上顶部代表当日<b>最大值</b>，下底部代表当日<b>最小值</b>。
:::

## RSS订阅
<b>相关服务:RSS订阅</b>
::: tip 提示
以下除`订阅列表`外的指令均需要管理员权限。
:::
::: warning 注意
直播间类订阅只有在开播时才能订阅。
:::

<template>
   <div>
      <a-collapse>
         <a-collapse-panel key="1" header="点击展开功能说明">
            <table>
               <thead>
                  <tr>
                     <th style="text-align: left;">指令</th>
                     <th style="text-align: left;">说明</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td style="text-align: left;">订阅列表</td>
                     <td style="text-align: left;">查看订阅列表</td>
                  </tr>
                  <tr>
                     <td style="text-align: left;">添加订阅 动态/追番 uid</td>
                     <td style="text-align: left;">添加b站up主动态/追番更新的订阅</td>
                  </tr>
                  <tr>
                     <td style="text-align: left;">添加订阅 投稿/专栏 uid</td>
                     <td style="text-align: left;">添加b站up主投稿/专栏更新的订阅</td>
                  </tr>
                  <tr>
                     <td style="text-align: left;">添加订阅 排行榜 分区id</td>
                     <td style="text-align: left;">添加b站排行榜订阅</td>
                  </tr>
                  <tr>
                     <td style="text-align: left;">添加订阅 直播 房间号</td>
                     <td style="text-align: left;">添加b站直播间开播订阅</td>
                  </tr>
                  <tr>
                     <td style="text-align: left;">添加订阅 漫画 漫画id</td>
                     <td style="text-align: left;">添加b站漫画更新订阅(漫画id：b漫网址https://manga.bilibili.com/detail/mc26505
                        中的26505即是漫画id)</td>
                  </tr>
                  <tr>
                     <td style="text-align: left;">添加订阅 明日方舟</td>
                     <td style="text-align: left;">添加明日方舟新闻订阅</td>
                  </tr>
                  <tr>
                     <td style="text-align: left;">添加订阅 原神</td>
                     <td style="text-align: left;">添加原神新闻订阅</td>
                  </tr>
                  <tr>
                     <td style="text-align: left;">添加订阅 pcr X服动态</td>
                     <td style="text-align: left;">添加公主连结国/台/日服动态订阅(X=国/台/日)</td>
                  </tr>
                  <tr>
                     <td style="text-align: left;">添加订阅 斗鱼直播 房间号</td>
                     <td style="text-align: left;">添加斗鱼直播间开播订阅</td>
                  </tr>
                  <tr>
                     <td style="text-align: left;">添加订阅 虎牙直播 房间号</td>
                     <td style="text-align: left;">添加虎牙直播间开播订阅</td>
                  </tr>
                  <tr>
                     <td style="text-align: left;">删除订阅 订阅序号</td>
                     <td style="text-align: left;">删除订阅列表指定项</td>
                  </tr>
                  <tr>
                     <td style="text-align: left;">简略模式 订阅序号 启用/禁用</td>
                     <td style="text-align: left;">为指定订阅设置推送消息模式：启用，推送消息仅包含标题；禁用，推送消息包含详情及图片</td>
                  </tr>
               </tbody>
            </table>
         </a-collapse-panel>
      </a-collapse>
   </div>
</template>

## 其他娱乐功能

   <template>
      <div>
         <a-collapse>
            <a-collapse-panel key="1" header="点击展开功能说明">
               <table>
                  <thead>
                     <tr>
                        <th style="text-align: left;">功能名称</th>
                        <th style="text-align: left;">指令</th>
                        <th style="text-align: left;">说明</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <td style="text-align: left;">网抑云时间</td>
                        <td style="text-align: left;"><b>(@bot)</b>网抑云/上号</td>
                        <td style="text-align: left;">随机来句网抑云语录<br><b>相关服务:网抑云</b></td>
                     </tr>
                     <tr>
                        <td style="text-align: left;">好看的东西</td>
                        <td style="text-align: left;">来点好看的</td>
                        <td style="text-align: left;">发点好看的，仅限22点至次日3点使用<br><b>相关服务:-好看的东西-</b></td>
                     </tr>
                     <tr>
                        <td style="text-align: left;">迫害龙王</td>
                        <td style="text-align: left;">迫害龙王</td>
                        <td style="text-align: left;"><span data-v-4cb41744="" class="badge tip"
                              style="vertical-align: top;">获得金币</span><span data-v-4cb41744="" class="badge warning"
                              style="vertical-align: top;">花费金币</span><br><b>相关服务:迫害龙王</b></td>
                     </tr>
                     <tr>
                        <td style="text-align: left;">能不能好好说话?(缩写释义)</td>
                        <td style="text-align: left;">转义 缩写</td>
                        <td style="text-align: left;"><b>相关服务:能不能好好说话</b></td>
                     </tr>
                     <tr>
                        <td style="text-align: left;">猜猜我是谁？</td>
                        <td style="text-align: left;">cygames</td>
                        <td style="text-align: left;"><span data-v-4cb41744="" class="badge tip"
                              style="vertical-align: top;">获得金币</span><br><b>相关服务:猜声音</b></td>
                     </tr>
                     <tr>
                        <td style="text-align: left;">语音小彩蛋</td>
                        <td style="text-align: left;">戳一戳bot即可</td>
                        <td style="text-align: left;">*限于最新版手机QQ(TIM/PCQQ不能戳一戳)<br><b>相关服务:聊天</b></td>
                     </tr>
                     <tr>
                        <td style="text-align: left;">反骑空士</td>
                        <td style="text-align: left;"><b>(自动)</b></td>
                        <td style="text-align: left;">戳破骑空士的阴谋吧！<br><b>相关服务:反骑空士</b></td>
                     </tr>
                     <tr>
                        <td style="text-align: left;">反哔哩哔哩小程序</td>
                        <td style="text-align: left;"><b>(自动)</b></td>
                        <td style="text-align: left;">让那些哔哩哔哩小程序都见鬼去吧！</td>
                     </tr>
                     <tr>
                        <td style="text-align: left;">猜群友</td>
                        <td style="text-align: left;">猜群友</td>
                        <td style="text-align: left;"><span data-v-4cb41744="" class="badge tip"
                              style="vertical-align: top;">获得金币</span><br>提交答案的方式:直接at目标群友 或者
                           完整输入群友的昵称<br><b>相关服务:猜群友</b></td>
                     </tr>
                     <tr>
                        <td style="text-align: left;">报时</td>
                        <td style="text-align: left;">报时</td>
                        <td style="text-align: left;"><b>相关服务:现在几点</b></td>
                     </tr>
                     <tr>
                        <td style="text-align: left;">有内鬼图片生成器</td>
                        <td style="text-align: left;">有内鬼 文字</td>
                        <td style="text-align: left;"><b>相关服务:有内鬼</b></td>
                     </tr>
                     <tr>
                        <td style="text-align: left;">答案之书</td>
                        <td style="text-align: left;">问题 翻看答案</td>
                        <td style="text-align: left;"><b>相关服务:答案之书</b></td>
                     </tr>
                     <tr>
                        <td style="text-align: left;">今天吃什么</td>
                        <td style="text-align: left;">今天吃什么</td>
                        <td style="text-align: left;"><b>相关服务:今天吃什么</b><br /><s>嘉然今天吃什么</s></td>
                     </tr>
                     <tr>
                        <td style="text-align: left;">淫语翻译</td>
                        <td style="text-align: left;">淦翻译 你要翻译的内容</td>
                        <td style="text-align: left;"><b>相关服务:淫语翻译</b></td>
                     </tr>
                     <tr>
                        <td style="text-align: left;">高低情商图片生成器</td>
                        <td style="text-align: left;">高情商 内容 低情商 内容</td>
                        <td style="text-align: left;"><b>相关服务:高情商</b></td>
                     </tr>
                  </tbody>
               </table>
            </a-collapse-panel>
         </a-collapse>
      </div>
   </template>
   
   <script>
      export default {
         data() {
            return {
               activeKey: ['1']
            };
         },
         watch: {
            activeKey(key) {
               console.log(key);
            },
         },
      };
   </script>