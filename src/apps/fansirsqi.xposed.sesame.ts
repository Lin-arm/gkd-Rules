import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'fansirsqi.xposed.sesame',
  name: '芝麻粒-TK',
  groups: [
    {
      key: 1,
      name: '弹窗-自动知道',
      desc: '每次打开tk时的弹窗->点击 我不知道了',
      rules: [
        {
          matches: '[text*="知道"][id$="button1"][visibleToUser=true]',
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/23013421',
          activityIds: 'fansirsqi.xposed.sesame.ui.MainActivity',
        },
      ],
    },
  ],
});
