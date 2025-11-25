import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xiaomi.market',
  name: '(小米)应用商店',
  groups: [
    {
      key: 1,
      name: '快极🤳看广告-弹窗-前往应用商店',
      desc: '打开可领额外金币-弹窗-前往',
      enable: false,
      rules: [
        {
          anyMatches: [
            '[vid="tvDiscoverMoreApps"][text^="前往应用商店"][clickable=true][focusable=true]',
            '[vid="viewDetail"][text="应用详情"][clickable=true][focusable=true]',
          ],
          fastQuery: true,
          snapshotUrls: [
            'https://i.gkd.li/i/23607930',
            'https://i.gkd.li/i/23750274',
          ],
          activityIds: '.ui.detail.AppDetailCardActivity',
        },
      ],
    },
  ],
});
