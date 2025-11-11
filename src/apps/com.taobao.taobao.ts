import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taobao.taobao',
  name: '淘宝',
  groups: [
    {
      key: 1,
      name: '🌾农场-施肥-领肥料',
      desc: '施满n次肥-点击领取肥料',
      rules: [
        {
          matches: '[text$="肥料 领取"][visibleToUser=true]',
          fastQuery: false,
          snapshotUrls: [
            'https://i.gkd.li/i/23240421',
            'https://i.gkd.li/i/23263684',
          ],
          activityIds: [
            'com.taobao.themis.container.app.TMSActivity',
            'com.taobao.browser.BrowserActivity',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '🌾农场-挖肥料-领取',
      desc: '兔兔挖肥料-挖满时领取',
      rules: [
        {
          matches: '[text^="兔兔挖肥料"][text$="可领取"][visibleToUser=true]',
          fastQuery: false,
          snapshotUrls: 'https://i.gkd.li/i/23263684',
          activityIds: [
            'com.taobao.themis.container.app.TMSActivity',
            'com.taobao.browser.BrowserActivity',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '🌾农场-肥料袋-领取肥料',
      desc: '右边肥料袋-点击领取',
      rules: [
        {
          matches: '[text$="肥料，点击领取"][visibleToUser=true]',
          fastQuery: false,
          snapshotUrls: 'https://i.gkd.li/i/23393987',
          activityIds: [
            'com.taobao.themis.container.app.TMSActivity',
            'com.taobao.browser.BrowserActivity',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '🌾农场-弹窗-x掉',
      desc: '①施肥大礼包 ②首页进入 ③明天提醒',
      rules: [
        {
          anyMatches: [
            '[text="恭喜获得施肥大礼包"] < * + Button[text="关闭"][visibleToUser=true]',
            '[text^="恭喜领到" || text^="从淘宝首页"] <(1,2) * + * > Button[text="关闭"][visibleToUser=true]',
            '[text="提醒我明天领"] + Button[text=""][visibleToUser=true]',
          ],
          fastQuery: false,
          snapshotUrls: [
            'https://i.gkd.li/i/23300544',
            'https://i.gkd.li/i/23393863',
            'https://i.gkd.li/i/23468858',
            'https://i.gkd.li/i/23413567',
          ],
          activityIds: [
            'com.taobao.themis.container.app.TMSActivity',
            'com.taobao.browser.BrowserActivity',
          ],
        },
      ],
    },
  ],
});
