# 会战管理(v2)

<b>欢迎使用全新的会战管理系统！</b>


## 机制简介
- <b>可以同时挑战五只boss</b>  
- <b>击败当前boss后，会出现下一周目的相同boss</b>  
- <b>存在于场上的boss一定是处于同一阶段的</b>  
  也就是说在boss都为二周目时，只单独击败某个boss并不会出现新的boss
- <b>存在于场上的boss不会相差超过一个周目</b>  
  也就是说在其余boss都为五周目时，击败六周目的某个boss之后并不会出现新的boss  
- <b>可以存储至多三次补偿时间，并且在出刀时可以自由选择是否要使用补偿时间</b>

## 使用指南

### 初始化

1. 发送<b>“建立X服公会”</b>（X=台、日、国）来建立一个新的公会
2. 让所有公会成员发送<b>“加入公会”</b>来加入，或者管理员使用<b>“加入全部成员”</b>来加入全部的成员

<B>因为会战管理v2继承了大部分会战管理v1（即yobot）的指令设计，如果你之前使用过，那么可以直接跳至<a href="#与会战管理v1的差异">与会战管理v1的差异</a>了解两者差异后就能上手。</b>

### 基本用法

1. <b>查看目前的挑战进度和状态</b>

现在打到哪了？我出了几刀？公会一共还剩几刀？

- 查询 2王 的<b>预约、挂树和进本</b>状态及生命值，使用<B>“查2”</b>
- 查看我出的刀的<b>详情</b>，使用<B>“出刀详情”</b>
- 查看我<b>还有多少刀没出</b>，使用<B>“进度”</b>
- 查看当前<b>boss状态</b>和<b>全群的进度</b>，使用<B>“状态”</b>
- <B>催促没有出刀</B>的成员尽快出刀，使用<B>“一键催刀”</b>

2. <b>预约Boss</b>

想打的Boss现在还没有出现？预约一下吧！

- 预约<B>下一周目</B>的 2王，使用<B>“预约 2”</b>
- 预约<B>5周目</B>的 2王，使用<B>“预约 2 周目5”</b> 
- 想boss<B>每次出现</b>都提醒，而不是第一次出现提醒？  
  网页端更改<B>预约偏好</b>为每次提醒，然后使用<B>“预约 2”</b>
- 预约错boss了？  
  使用<B>“取消预约 2”</b>（预约时没有指定周目）或<B>“取消预约 2 周目5”</b>（预约时指定了周目）

3. <b>申请出刀</b>

boss终于出现了？要出刀了！

- <b>申请</B>对 2王 出刀，使用<B>“申请出刀 2”</b>
- 计划有变，不打算对 2王 出刀了？
  使用<B>“取消进本”</b>

4. <b>出刀</b>

要打boss了！

- 对 1王 造成了 10000 点伤害，使用<B>“1报刀 10000”</b>
- 击败了 1王，使用<B>“1尾刀”</b>
- <B>使用补偿时间</b>对 1王 造成了 10000 点伤害，使用<B>“1补偿刀 10000”</b> 
- <B>使用补偿时间</b>击败了 1王，使用<B>“1补偿尾刀”</b> 
- <B>不慎掉了一刀？</b>直接报一个<B>零伤害</b>的刀即可

5. <b>挂树与SL</b>

出刀时发生了意外？

- 如果挑战 2王 时挂树了，使用<B>“挂树 2”</b><b>（如果先前已经申请了出刀，则无需附上boss序号，会自动判断）</b>
- 如果使用了SL，使用<B>“SL”</b>
- 想SL的时候<B>查询今天有没有SL</b>？使用<B>“SL ？”</b>
- 使用了SL指令但是突然发现不需要SL了？使用<B>“删除SL”</b>

### 进阶用法

<B>一般来说，基本用法中的指令就能覆盖80%的情况了。但是如果你遇上了特殊的情况，那么下面这些指令可能会帮助你。</b>

1. <b>修改进度</b>

报错刀了？血量不对？漏报了一刀？

- 撤销<B>最近的一刀</b>，使用<B>“撤销”</b>
- 撤销<B>编号为23的一刀</b>，使用<B>“撤销 23”</b>
- 把 2王 的血量改为300，周目数改成10，使用<B>“修改进度 2王 周目10 血量300”</b>
- 新一期会战来了，要清除上期会战的数据？
  使用<B>“重置进度”</b>
- <b>补报</b>昨天在20周目对 2王 造成了伤害3000的<b>普通刀</b>，使用<B>“2补报刀 3000 周目20 昨天”</b>（如果是尾刀，则把补报改为补报尾刀即可）
- <b>补报</b>今天在20周目对 2王 造成了伤害3000的<b>补偿刀</b>，使用<B>“2补报补偿刀 3000 周目20”</b>（如果是尾刀，则把补报改为补报补偿尾刀即可）

<a-alert type="warning" message="注意" show-icon>
<template slot="description">
<B>补报尾刀时，需要附上伤害。因为补报时不能自动计算出尾刀的伤害。</b>
</template>
</a-alert>

2. <b>修改公会&成员</b>

公会区服不对？混进了多余的成员？

- 修改公会区服只需要重建公会，例如改为台服公会只需要使用<B>“创建台服公会”</b>
- 删除公会内的成员，使用<B>“退出公会 @某人”</b>（不加at就是自己退出）

3. <b>留言</b>

挂树的时候想说明情况，出刀、进本、预约想说明阵容和状态？没问题！

- <b>报刀</b>时留言：<b>1报刀114514 ：这是一条留言</b>
- <b>补报</b>时留言：<b>1补报114514 ：这是一条留言</b> 
- <b>预约</b>时留言：<b>预约1 ：这是一条留言</b>
- <b>挂树</b>时留言：<b>挂树1 ：这是一条留言</b>

4. <b>替他人操作</b>

代替他人报刀、SL、预约、挂树和进本？也没问题！

请参考下方的<b><a href="#指令一览表">“指令一览表”</a></B>操作。

## 与会战管理v1的差异

- 由于现在允许不按照顺序挑战boss，因此，报刀、挂树及申请出刀等需要附上boss序号。如：预约 2 / 挂树 2 / 1报刀 10000
- 此外，现在允许存储补偿时间。也就是说，尾刀的下一刀未必是补偿刀。因此，报补偿刀时需要使用额外的指令。如：1补偿刀 10000
- 除以上两个主要的改动，还有一些小改动，具体请参考下方的“指令一览表”。

## 指令一览表

<a-alert type="info" message="提示" show-icon>
<template slot="description">
<b>1. 包裹在“[]”中的指令为可选参数，可以不提供。</b></br>
<b>2. 若无特殊说明，下表中X代表boss序号（1~5），Y代表周目数（1~）。</b>
</template>
</a-alert>

### 群聊

| 指令                                                      | 说明                                                                           |
| :-------------------------------------------------------- | :----------------------------------------------------------------------------- |
| 创建X服公会                                               | X=国、台、日                                                                       |
| 加入公会 [@某人]                                          | <b>仅限会战管理员加入其他成员</b>                                              |
| 加入全部成员                                              | <b>仅限会战管理员使用</b>                                                      |
| 退出公会 [@某人]                                          | <b>仅限会战管理员删除其他成员</b>                                              |
| X报刀114514 [@某人] [昨日] [:留言]                        | 普通刀                                                                         |
| X尾刀 [@某人] [昨日] [:留言]                              | 尾刀                                                                           |
| X补偿刀114514 [@某人] [昨日] [:留言]                      | 普通补偿刀                                                                     |
| X补偿尾刀 [@某人] [昨日] [:留言]                          | 收尾补偿刀                                                                     |
| 撤销 [出刀编号]                                           | 撤销上一刀或指定刀                                                             |
| X补报刀114514(w/k/万/千) 周目Y [@sb] [昨日] [:留言]       | 插入一刀普通刀(不带昨日则为今日)                                               |
| X补报尾刀114514(w/k/万/千) 周目Y [@sb] [昨日] [:留言]     | 插入一刀尾刀(不带昨日则为今日)                                                 |
| X补报补偿刀114514(w/k/万/千) 周目Y [@sb] [昨日] [:留言]   | 插入一刀补偿普通刀(不带昨日则为今日)                                           |
| X补报补偿尾刀114514(w/k/万/千) 周目Y [@sb] [昨日] [:留言] | 插入一刀补偿尾刀(不带昨日则为今日)                                             |
| SL [@某人] [?]                                            |
| 删除SL [@某人]                                            |
| 状态                                                      | 显示boss状态及全群进度                                                         |
| 预约 X [周目Y] [@某人] [:留言]                            | 预约X号boss</br>不提供周目会预约下一周目或每个周目(取决于提醒偏好)             |
| 预约表                                                    | 查看每个boss的预约情况                                                         |
| 取消预约 X 周目Y [@某人]                                  | <b>只有预约了每个周目的boss需要取消时才不需要boss序号</b>                      |
| 取消进本 [@某人]                                          | 撤销申请出刀                                                                   |
| 挂树 [X] [@某人] [:留言]                                  |
| 进度 [@某人]                                              | 显示个人或指定人的进度                                                         |
| 修改进度 X王 周目Y 血量300(w/k/万/千)                     | 修改进度                                                                       |
| 出刀详情 [@某人]                                          | 显示个人或指定人今日出刀的进度                                                 |
| 一键催刀                                                  | 催刀<br><b>仅限会战管理员使用</b>                                              |
| 申请出刀 X [@某人] [:留言]                                |
| 查X                                                       | 查询某boss的预约,挂树和进本状态                                                |
| 重置进度                                                  | 重置进度并删除所有的申请出刀/预约/挂树及出刀记录</br><b>仅限会战管理员使用</b> |
| 面板/查刀                                                 | 发送会战面板地址                                                               |
| version/ver/关于                                          | 查看系统版本                                                                   |

### 私聊

| 指令     | 说明         |
| :------- | :----------- |
| 会战登录 | 登录到网页端 |