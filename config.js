// 配置
window.Config = {

  // 站点名
  SiteName: 'Lair Server Status',

  // 站点链接
  SiteUrl: '/',

  // UptimeRobot Api 域名
  // 只需填写域名部分，默认为官网域名
  // 因官网 API 时不时的会 CROS 报错，可填自定义反代域名
  // 详见 https://github.com/yb/uptime-status/ 说明
  ApiDomain: 'api.uptimerobot.com',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
  ApiKeys: [
    'm790605293-309c4d07c08e1c3aaf405af2',
    'm790605306-4cb3545f01848c690c21d9e5',
    'm790605382-958a96403990c68f9dae521b',
  ],

  // 是否显示监测站点的链接
  ShowLink: true,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 60,

  // 导航栏菜单
  Navi: [
    {
      text: 'Lair 文档',
      url: 'https://lairdoc.asu.world/'
    },
    {
      text: 'Lair 皮肤站',
      url: 'http://skin.asu.world/'
    }
  ]
};
