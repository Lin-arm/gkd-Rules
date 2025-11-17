import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.qidian.QDReader',
  name: '起点读书',
  groups: [
    {
      key: 1,
      name: '每日福利-看完广告-知道了',
      desc: '点击知道了',
      rules: [
        {
          matches: ['@TextView[text="知道了"] <<n [vid="webViewContainer"]'],
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/22909666',
          activityIds: 'com.qidian.QDReader.ui.activity.QDBrowserActivity',
        },
      ],
    },
    {
      key: 2,
      name: '每日福利-自动看广告',
      desc: '点击去完成',
      enable: false,
      rules: [
        {
          actionCd: 1500,
          matches: '[id="video"] >(1,2) [text="去完成"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/23290942', // 422
            'https://i.gkd.li/i/23565148', // 422
            'https://i.gkd.li/i/23561866', // 420
            'https://i.gkd.li/i/23561912', // 428
          ],
          excludeSnapshotUrls: 'https://i.gkd.li/i/23562885',
          activityIds: 'com.qidian.QDReader.ui.activity.QDBrowserActivity',
        },
      ],
    },
  ],
});
