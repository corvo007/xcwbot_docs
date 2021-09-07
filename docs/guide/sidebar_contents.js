module.exports = [{
	title: '使用手册',
	collapsable: false
},
{
	title: '前言',
	path: '/guide/introduction',
},
{
	title: '会战功能',
	path: '/guide/clanbattle',
	children: [
		['/guide/clanbattle', '功能介绍'],
		['/guide/clanbattleoperating', '操作指导']
	]
},
{
	title: '实用功能',
	path: '/guide/tools'
},
{
	title: '娱乐功能',
	path: '/guide/entertainment',
	children: [
		['/guide/entertainment', '功能介绍'],
		['/guide/scoresystem', '金币系统指南']
	]
},
{
	title: '常见问题',
	path: '/guide/qa',
}];
