import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.settings',
  name: '设置',
  groups: [
    {
      key: 1,
      name: '插数据线连接电脑-USB提示-取消',
      desc: '(小米📱)USB用于xxx -取消',
      enable: false,
      rules: [
        {
          matches: [
            '[vid="alertTitle" || id="miui:id/alertTitle"][text="USB 用于"]',
            '[text="取消"][clickable=true][focusable=true]',
          ],
          fastQuery: true,
          snapshotUrls: [
            'https://i.gkd.li/i/23428639', // 设置v12
            'https://i.gkd.li/i/23696166', // 设置v11
          ],
          activityIds: '.connecteddevice.usb.UsbModeChooserActivity',
        },
      ],
    },
    {
      key: 2,
      name: '自动精灵-获取无障碍-允许',
      desc: '(真我📱)弹窗-点击 允许',
      enable: false,
      rules: [
        {
          matches: [
            '[vid="title"][text*="自动精灵"]',
            '[text="允许"][clickable=true][focusable=true]',
          ],
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/23588703',
          activityIds: '.SubSettings',
        },
      ],
    },
  ],
});
