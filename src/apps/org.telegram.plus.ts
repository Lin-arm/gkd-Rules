import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'org.telegram.plus',
  name: 'Plus Messenger',
  groups: [
    {
      key: 1,
      name: '更多-下载①',
      desc: '右上角菜单-点击 下载',
      enable: false,
      rules: [
        {
          matches: '@[clickable=true][left>350] > [text="保存到相册"]',
          fastQuery: true,
          snapshotUrls: 'https://i.gkd.li/i/24337783',
          excludeSnapshotUrls: 'https://i.gkd.li/i/24450853', // [left=83]
          activityIds: 'org.telegram.ui.LaunchActivity',
        },
      ],
    },
    {
      key: 2,
      name: '更多-下载②-单个媒体',
      desc: '弹窗-点击 这张图片or这个媒体',
      rules: [
        {
          matches:
            '[text="取消"] + TextView[text="这张图片" || text="这个媒体"][clickable=true]',
          fastQuery: true,
          snapshotUrls: [
            'https://i.gkd.li/i/22945715', //图片
            'https://i.gkd.li/i/22945853', //视频
          ],
          activityIds: 'org.telegram.ui.LaunchActivity',
        },
      ],
    },
  ],
});
