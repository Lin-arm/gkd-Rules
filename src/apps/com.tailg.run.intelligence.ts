import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tailg.run.intelligence',
  name: '台铃智能',
  groups: [
    {
      key: 1,
      name: '功能类-自动[打开]蓝牙',
      desc: '点击1次[无蓝牙], (⚠️需配合[设置]的规则使用)',
      enable: false,
      rules: [
        {
          fastQuery: true,
          matchTime: 10000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: '.model.home.activity.HomeActivity',
          matches: '@[clickable=true] > [text="无蓝牙"]',
          snapshotUrls: 'https://i.gkd.li/i/33883092',
          exampleUrls: 'https://e.gkd.li/1d7f96d6-840a-4224-ae91-e62a88265d36',
        },
      ],
    },
  ],
});
