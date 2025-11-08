import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.miui.securitycenter',
  name: '手机管家',
  groups: [
    {
      key: 1,
      name: '无障碍-危险警告-确定',
      desc: '①✔已知晓风险 ②确定',
      rules: [
        {
          key: 1,
          actionMaximum: 1,
          matchDelay: 9500,
          resetMatch: 'app',
          matches: [
            '[text^="我已知晓可能存在的风险"] - [vid="check_box"][visibleToUser=true]',
          ],
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/23421337',
          activityIds:
            'com.miui.permcenter.privacymanager.SpecialPermissionInterceptActivity',
        },
        {
          key: 2,
          preKeys: [1],
          matches: ['[text="确定"][vid="intercept_warn_allow"]'],
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/23421337',
          activityIds:
            'com.miui.permcenter.privacymanager.SpecialPermissionInterceptActivity',
        },
      ],
    },
  ],
});
