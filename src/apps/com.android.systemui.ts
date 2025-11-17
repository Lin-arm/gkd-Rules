import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.systemui',
  name: '系统界面',
  groups: [
    {
      key: 1,
      name: '自动精灵-获取屏幕内容-允许',
      desc: '弹窗-点击 立即开始',
      rules: [
        {
          matches: [
            '[vid="dialog_title" || id="android:id/message"][text*="自动精灵"]',
            '[text="立即开始"][visibleToUser=true]',
          ],
          fastQuery: true,
          snapshotUrls: [
            'https://i.gkd.li/i/23381954',
            'https://i.gkd.li/i/23382378',
          ],
          activityIds: '.media.MediaProjectionPermissionActivity',
        },
      ],
    },
    {
      key: 2,
      name: 'GKD-获取屏幕内容-允许',
      desc: '弹窗-点击 立即开始',
      rules: [
        {
          matches: [
            '[vid="dialog_title" || id="android:id/message"][text*="GKD"]',
            '[text="立即开始"][visibleToUser=true]',
          ],
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/23415064',
          activityIds: '.media.MediaProjectionPermissionActivity',
        },
      ],
    },
    {
      key: 3,
      name: '插数据线连接电脑-USB提示-返回键',
      desc: 'USB用于xxx -返回键', // realme手机
      enable: false,
      rules: [
        {
          action: 'back',
          matches: ['[vid="usb_select_title_tv"][text="USB 用于"]'],
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/23574876',
          activityIds:
            'com.oplus.settings.feature.homepage.OplusSettingsHomepageActivity',
        },
      ],
    },
  ],
});
