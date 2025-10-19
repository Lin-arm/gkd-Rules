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
          matches: ['TextView[text="知道了"][visibleToUser=true]'],
          fastQuery: false,
          snapshotUrls: 'https://i.gkd.li/i/22909666',
          activityIds: 'com.qidian.QDReader.ui.activity.QDBrowserActivity',
        },
      ],
    },
  ],
});
