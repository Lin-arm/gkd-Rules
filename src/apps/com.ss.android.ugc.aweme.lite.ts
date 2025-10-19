import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ss.android.ugc.aweme.lite',
  name: '抖音极速版',
  groups: [
    {
      key: 1,
      name: '视频页-分享-复制链接-x掉',
      desc: '已复制-x掉',
      rules: [
        {
          matches: [
            '[text^="链接已复制"] + ImageView[vid="m5e"][visibleToUser=true]',
          ],
          fastQuery: true,
          snapshotUrls: [
            'https://i.gkd.li/i/22944102',
            'https://i.gkd.li/i/22945101',
          ],
          activityIds: [
            'com.ss.android.ugc.aweme.detail.ui.DetailActivity',
            'com.ss.android.ugc.aweme.main.MainActivity',
          ],
        },
      ],
    },
  ],
});
