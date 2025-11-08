import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.settings',
  name: '设置',
  groups: [
    {
      key: 1,
      name: '插数据线连接电脑-USB提示-取消',
      desc: 'USB用于xxx -取消',
      enable: false,
      rules: [
        {
          matches: [
            '[vid="alertTitle"][text="USB 用于"]',
            '[text="取消"][visibleToUser=true]',
          ],
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/23428639',
          activityIds: '.connecteddevice.usb.UsbModeChooserActivity',
        },
      ],
    },
  ],
});
