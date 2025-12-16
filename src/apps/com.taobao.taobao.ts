import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taobao.taobao',
  name: '淘宝',
  groups: [
    {
      key: 1,
      name: '🌾农场-自动领肥料',
      desc: '①施满n次肥 ②兔兔挖肥料 ③右边肥料袋',
      activityIds: [
        'com.taobao.themis.container.app.TMSActivity',
        'com.taobao.browser.BrowserActivity',
        'com.taobao.tao.welcome.Welcome',
      ],
      rules: [
        {
          key: 1,
          matches: '[text$="肥料 领取"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/23240421',
            'https://i.gkd.li/i/23263684',
          ],
        },
        {
          key: 2,
          matches: '[text^="兔兔挖肥料"][text$="可领取"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/23263684',
            'https://i.gkd.li/i/24163618',
          ],
        },
        {
          key: 3,
          matches: '[text$="肥料，点击领取"][visibleToUser=true]',
          snapshotUrls: 'https://i.gkd.li/i/23393987',
        },
      ],
    },
    {
      key: 4,
      name: '🌾农场-弹窗-x掉',
      desc: '①施肥大礼包 ②首页进入 ③明天提醒',
      rules: [
        {
          matches: [
            'Button[text="" || text="关闭"][width=107 || width=108][height>=107 && height<=110][clickable=true][focusable=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/23300544', //恭喜获得施肥大礼包
            'https://i.gkd.li/i/23393863', //从淘宝首页进入农场
            'https://i.gkd.li/i/23468858', //恭喜领到大量肥料
            'https://i.gkd.li/i/23413567', //明日7点后记得来领
            'https://i.gkd.li/i/23581433', //明日7点后记得来领
          ],
          activityIds: [
            'com.taobao.themis.container.app.TMSActivity',
            'com.taobao.browser.BrowserActivity',
            'com.taobao.tao.welcome.Welcome',
          ],
        },
      ],
    },
  ],
});
