import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.miui.securitycenter',
  name: '(小米)手机管家',
  groups: [
    {
      key: 1,
      name: '应用信息页-开自启动-确定',
      desc: '弹窗-确定',
      enable: false,
      rules: [
        {
          matches: [
            '[vid="message"][text^="开启自启动后"]',
            '[text="确定"][clickable=true]',
          ],
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/23764176',
          activityIds: 'com.miui.appmanager.ApplicationsDetailsActivity',
        },
      ],
    },
  ],
});
