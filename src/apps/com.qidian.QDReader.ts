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
          matches:
            'TextView[text="知道了"][clickable=true][visibleToUser=true]',
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
          actionCd: 1700, // 配合QD模块,免看广告领奖励 使用
          excludeMatches: '[text*="验证"][focusable=true][visibleToUser=true]', // 排除验证弹窗(遇则停)
          matches: '[id="video"] >(1,2) [text="去完成"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/23290942', // 422
            'https://i.gkd.li/i/23565148', // 422
            'https://i.gkd.li/i/23561866', // 420
            'https://i.gkd.li/i/23561912', // 428
          ],
          excludeSnapshotUrls: [
            'https://i.gkd.li/i/23562885',
            'https://i.gkd.li/i/23610102', // 422 验证弹窗
          ],
          activityIds: 'com.qidian.QDReader.ui.activity.QDBrowserActivity',
        },
      ],
    },
    {
      key: 3,
      name: '每日福利-阅读得积分-领取',
      desc: '点击领积分(❗遮挡可开shizuku强制点击)',
      activityIds: '.ui.activity.QDBrowserActivity',
      rules: [
        {
          key: 1,
          action: 'clickNode', //配合shizuku,挡住也能点击
          matches: '[id="read"] >(1,2) [text="领积分"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/24100818',
        },
        {
          key: 2,
          matches: '[id="read"] >(1,2) [text="领积分"][visibleToUser=true]',
        },
      ],
    },
  ],
});
