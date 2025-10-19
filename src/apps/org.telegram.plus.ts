import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'org.telegram.plus',
  name: 'Plus Messenger',
  groups: [
    {
      key: 1,
      name: '更多-下载-单个图片or视频',
      desc: '弹窗-点击 这张图片or这个媒体',
      rules: [
        {
          matches: [
            '[text="保存媒体文件"] < * +2 * > TextView[text="这张图片" || text="这个媒体"][visibleToUser=true]',
          ],
          fastQuery: true,
          snapshotUrls: [
            'https://i.gkd.li/i/22945715',
            'https://i.gkd.li/i/22945853',
          ],
          activityIds: 'org.telegram.ui.LaunchActivity',
        },
      ],
    },
  ],
});
