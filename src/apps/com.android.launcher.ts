import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.launcher',
  name: '系统桌面',
  groups: [
    {
      key: 1,
      name: '快极-任务页弹窗-取消',
      desc: '添加小组件到桌面-取消',
      enable: false,
      rules: [
        {
          matches: [
            '[vid="alertTitle"][text="添加至桌面"]',
            '[vid="widget_name"][text$="快手赚金币"]',
            '[text="取消"][visibleToUser=true]',
          ],
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/23422113',
          activityIds: 'com.android.launcher3.dragndrop.AddItemActivity',
        },
      ],
    },
  ],
});
