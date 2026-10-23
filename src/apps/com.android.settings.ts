import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.settings',
  name: '设置',
  groups: [
    {
      key: 1,
      name: '功能类-插USB后选默认连接方式',
      desc: '(小米华为📱)点击[取消]', // 取消不选即默认
      enable: false,
      rules: [
        {
          // activityIds: [],
          fastQuery: true,
          matches: [
            '[text="USB 用于" || text="USB 连接方式"][visibleToUser=true]',
            '[text="取消"][clickable=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/23428639', // (小米Android 12📱)
            'https://i.gkd.li/i/23696166', // (小米Android 11📱)
            'https://i.gkd.li/i/25351690', // (华为Android 10📱)① 鸿蒙3 此时按返回键无效
            'https://i.gkd.li/i/25351689', // (华为Android 10📱)② 由这两个快照看出 界面id 不固定
          ],
          exampleUrls: 'https://e.gkd.li/1ab102bd-99dd-471a-8841-33a7aaf2790a',
        },
      ],
    },
    {
      key: 2,
      name: '功能类-[允许]自动精灵获取无障碍',
      desc: '(华为真我📱)弹窗-点击[允许/确定]',
      enable: false,
      rules: [
        {
          fastQuery: true,
          matches: [
            '[text*="自动精灵"][vid="title" || id="android:id/alertTitle"]',
            '[text="允许" || text="确定"][clickable=true]',
          ],
          snapshotUrls: [
            'https://i.gkd.li/i/23588703', //真我
            'https://i.gkd.li/i/29214694', //华为
          ],
          activityIds: ['.SubSettings', '.CleanSubSettings'],
        },
      ],
    },
    {
      key: 3,
      name: '功能类-自动允许USB调试',
      desc: '(真我📱)弹窗-点击[确定]',
      enable: false,
      rules: [
        {
          fastQuery: true,
          matches: [
            '[text="是否允许 USB 调试？"][visibleToUser=true]',
            '[text="确定"][clickable=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/25254118',
          exampleUrls: 'https://e.gkd.li/31684fe6-d89d-4e56-a4a3-2543a462ace8',
          activityIds: '.Settings$DevelopmentSettingsDashboardActivity',
        },
      ],
    },
    {
      key: 4,
      name: '功能类-[允许]台铃智能打开蓝牙',
      desc: '点击[允许] (⚠️建议配合[台铃智能]的规则使用)',
      enable: false,
      rules: [
        {
          fastQuery: true,
          activityIds: '.bluetooth.RequestPermissionHelperActivity',
          matches: ['[text*="台铃智能"][text*="打开蓝牙"]', '[text="允许"]'],
          snapshotUrls: 'https://i.gkd.li/i/33883105',
          exampleUrls: 'https://e.gkd.li/5b3442d1-3bb5-42e3-b1b2-83121090710f',
        },
      ],
    },
  ],
});
