import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.appshub.bettbox',
  name: 'Bettbox',
  groups: [
    {
      key: 1,
      name: '功能类-自动[启动]后返回',
      desc: '进app后 ②点击[启动] ③按[返回键]',
      enable: false,
      matchRoot: true,
      matchTime: 5000,
      actionMaximum: 1,
      resetMatch: 'app',
      activityIds: '.MainActivity',
      rules: [
        {
          key: 1,
          name: '①已启动-本次无操作',
          action: 'none', //仅作消耗点击次数用
          matches: '[clickable=true][desc="已开启" || desc*="启动时间"]',
          snapshotUrls: 'https://i.gkd.li/i/35034086', //已启动
        },
        {
          key: 2,
          name: '②点击[启动]',
          actionMaximumKey: 1,
          matches: '[clickable=true][desc="已关闭" || desc*="启动开关"]',
          snapshotUrls: 'https://i.gkd.li/i/35034074',
          exampleUrls: 'https://e.gkd.li/2af99523-a77d-4ffe-9969-486550d1a18a',
        },
        {
          key: 3,
          preKeys: [2],
          name: '③按[返回键]',
          action: 'back',
          actionDelay: 220, // 预留给key2 的点击时间
          matches: '[parent=null]',
        },
      ],
    },
  ],
});
