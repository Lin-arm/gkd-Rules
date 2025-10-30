import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taobao.taobao',
  name: '淘宝',
  groups: [
    {
      key: 1,
      name: '🌾芭芭农场-施肥-领肥料',
      desc: '施满n次肥-点击领取肥料',
      rules: [
        {
          matches: '[text$="肥料 领取"][visibleToUser=true]',
          fastQuery: false,
          snapshotUrls: 'https://i.gkd.li/i/23240421',
          activityIds: 'com.taobao.themis.container.app.TMSActivity',
        },
      ],
    },
  ],
});
