import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.zdanjian.zdanjian',
  name: '自动精灵',
  groups: [
    {
      key: 1,
      name: '运行脚本-弹窗-确定',
      desc: '①分辨率不匹配 ②系统无障碍',
      rules: [
        {
          matches: [
            '[text*="分辨率不匹配" || text*="已经开启自动精灵" || text^="请先在系统设置"]',
            '[text="确定"][vid="Dialog.BtnOk"][visibleToUser=true]',
          ],
          fastQuery: true,
          snapshotUrls: [
            'https://i.gkd.li/i/23421073',
            'https://i.gkd.li/i/23421179',
            'https://i.gkd.li/i/23429823',
          ],
          activityIds: [
            '.activities.script.LocalScriptDetailActivity',
            '.activities.home.HomeActivity',
          ],
        },
      ],
    },
  ],
});
